import { ref, computed, watch, type Ref } from 'vue'
import type { CountryCode } from 'libphonenumber-js/min'
import { MaskDialCore } from '../../core/MaskDialCore'
import type { MaskDialOptions, FormatData } from '../../core/types'

/**
 * Options for useMaskDial composable
 */
export interface UseMaskDialOptions extends Omit<MaskDialOptions, 'onFormat' | 'onValidate'> {
  /** Model value (for v-model support) */
  modelValue?: Ref<string> | string
}

/**
 * Return type for useMaskDial composable
 */
export interface UseMaskDialReturn {
  /** Current formatted value (reactive) */
  value: Ref<string>
  /** Set the raw value (will be formatted) */
  setValue: (value: string) => void
  /** Current country code (reactive) */
  country: Ref<CountryCode | undefined>
  /** Set the country */
  setCountry: (country: CountryCode) => void
  /** Whether the number is valid (reactive) */
  isValid: Ref<boolean>
  /** Whether the number is possible (reactive) */
  isPossible: Ref<boolean>
  /** E.164 formatted number (computed) */
  e164: Ref<string | undefined>
  /** National formatted number (computed) */
  national: Ref<string>
  /** International formatted number (computed) */
  international: Ref<string>
  /** Digits only (computed) */
  digits: Ref<string>
  /** Format data from last format operation (reactive) */
  formatData: Ref<FormatData | null>
  /** Handle input event */
  onInput: (event: Event) => void
  /** Handle keydown event */
  onKeydown: (event: KeyboardEvent) => void
  /** Bind to input element (for template ref) */
  inputRef: Ref<HTMLInputElement | null>
  /** Reset to initial state */
  reset: () => void
  /** v-model binding object */
  vModel: {
    value: Ref<string>
    onInput: (event: Event) => void
  }
}

/**
 * Vue 3 composable for phone number formatting and validation
 *
 * @example
 * ```vue
 * <script setup>
 * import { useMaskDial } from 'maskdial/vue'
 *
 * const {
 *   value,
 *   isValid,
 *   e164,
 *   onInput,
 *   inputRef
 * } = useMaskDial({ country: 'US' })
 * </script>
 *
 * <template>
 *   <input
 *     ref="inputRef"
 *     :value="value"
 *     @input="onInput"
 *     type="tel"
 *   />
 *   <p v-if="isValid">Valid: {{ e164 }}</p>
 * </template>
 * ```
 *
 * @example
 * ```vue
 * <!-- With v-model -->
 * <script setup>
 * import { ref } from 'vue'
 * import { useMaskDial } from 'maskdial/vue'
 *
 * const phone = ref('')
 * const { vModel, isValid } = useMaskDial({
 *   country: 'US',
 *   modelValue: phone
 * })
 * </script>
 *
 * <template>
 *   <input v-bind="vModel" type="tel" />
 * </template>
 * ```
 */
export function useMaskDial(options: UseMaskDialOptions = {}): UseMaskDialReturn {
  const { modelValue, country: initialCountry } = options

  // Reactive state
  const value = ref('')
  const country = ref<CountryCode | undefined>(initialCountry)
  const formatData = ref<FormatData | null>(null)
  const isValid = ref(false)
  const isPossible = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)

  // Cursor position tracking
  let pendingCursorPosition: number | null = null

  // Initialize core
  const core = new MaskDialCore({
    country: initialCountry,
    onFormat: (data) => {
      formatData.value = data
      if (data.country && data.country !== country.value) {
        country.value = data.country
      }
    },
    onValidate: (valid, possible) => {
      isValid.value = valid
      isPossible.value = possible
    },
  })

  // Computed values
  const e164 = computed(() => formatData.value?.e164)
  const national = computed(() => formatData.value?.national ?? value.value)
  const international = computed(() => core.getInternational() ?? value.value)
  const digits = computed(() => formatData.value?.digits ?? value.value.replace(/\D/g, ''))

  // Watch modelValue if provided
  if (modelValue !== undefined) {
    const modelRef = typeof modelValue === 'string' ? ref(modelValue) : modelValue

    watch(
      modelRef,
      (newValue) => {
        if (newValue !== value.value) {
          const result = core.format(newValue)
          value.value = result.formatted
        }
      },
      { immediate: true }
    )

    // Sync value back to modelValue
    watch(value, (newValue) => {
      if (modelRef.value !== newValue) {
        modelRef.value = newValue
      }
    })
  }

  // Watch country changes
  watch(country, (newCountry) => {
    if (newCountry && newCountry !== core.getOptions().country) {
      core.setCountry(newCountry)
      // Re-format current value with new country
      if (value.value) {
        const result = core.format(value.value.replace(/\D/g, ''))
        value.value = result.formatted
      }
    }
  })

  // Set value (formats the input)
  const setValue = (newValue: string) => {
    const result = core.format(newValue)
    value.value = result.formatted
  }

  // Set country
  const setCountry = (newCountry: CountryCode) => {
    country.value = newCountry
  }

  // Handle input event
  const onInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    const oldValue = value.value
    const newRawValue = input.value
    const cursorPos = input.selectionStart ?? newRawValue.length

    // Format the new value using processInput
    const result = core.processInput(newRawValue, oldValue, cursorPos)
    value.value = result.formatted

    // Store cursor position for restoration
    pendingCursorPosition = result.cursorPosition

    // Restore cursor position after Vue updates the DOM
    requestAnimationFrame(() => {
      if (pendingCursorPosition !== null && inputRef.value) {
        inputRef.value.setSelectionRange(pendingCursorPosition, pendingCursorPosition)
        pendingCursorPosition = null
      }
    })
  }

  // Handle keydown event
  const onKeydown = (_event: KeyboardEvent) => {
    // Allow default behavior - formatting handles everything
  }

  // Reset to initial state
  const reset = () => {
    value.value = ''
    country.value = initialCountry
    formatData.value = null
    isValid.value = false
    isPossible.value = false
  }

  // v-model binding helper
  const vModel = {
    value,
    onInput,
  }

  return {
    value,
    setValue,
    country,
    setCountry,
    isValid,
    isPossible,
    e164,
    national,
    international,
    digits,
    formatData,
    onInput,
    onKeydown,
    inputRef,
    reset,
    vModel,
  }
}

export default useMaskDial
