import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import type { CountryCode } from 'libphonenumber-js/min'
import { MaskDialCore } from '../../core/MaskDialCore'
import type { MaskDialOptions, FormatData } from '../../core/types'

/**
 * Hook options for useMaskDial
 */
export interface UseMaskDialOptions extends Omit<MaskDialOptions, 'onFormat' | 'onValidate'> {
  /** Initial phone number value */
  initialValue?: string
  /** Callback when the formatted value changes */
  onValueChange?: (data: FormatData) => void
  /** Callback when validation state changes */
  onValidationChange?: (isValid: boolean, isPossible: boolean) => void
}

/**
 * Return type for useMaskDial hook
 */
export interface UseMaskDialReturn {
  /** Current formatted value */
  value: string
  /** Set the raw value (will be formatted) */
  setValue: (value: string) => void
  /** Current country code */
  country: CountryCode | undefined
  /** Set the country */
  setCountry: (country: CountryCode) => void
  /** Whether the number is valid */
  isValid: boolean
  /** Whether the number is possible */
  isPossible: boolean
  /** E.164 formatted number */
  e164: string | undefined
  /** National formatted number */
  national: string
  /** International formatted number */
  international: string
  /** Digits only */
  digits: string
  /** Format data from last format operation */
  formatData: FormatData | null
  /** Input props to spread on input element */
  inputProps: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    type: 'tel'
    inputMode: 'tel'
    autoComplete: 'tel'
  }
  /** Ref to attach to input element for cursor management */
  inputRef: React.RefObject<HTMLInputElement>
  /** Reset to initial state */
  reset: () => void
}

/**
 * React hook for phone number formatting and validation
 *
 * @example
 * ```tsx
 * import { useMaskDial } from 'maskdial/react'
 *
 * function PhoneInput() {
 *   const { inputProps, isValid, e164 } = useMaskDial({
 *     country: 'US',
 *     onValueChange: (data) => console.log('Formatted:', data.formatted)
 *   })
 *
 *   return (
 *     <div>
 *       <input {...inputProps} />
 *       {isValid && <span>Valid: {e164}</span>}
 *     </div>
 *   )
 * }
 * ```
 */
export function useMaskDial(options: UseMaskDialOptions = {}): UseMaskDialReturn {
  const {
    initialValue = '',
    country: initialCountry,
    onValueChange,
    onValidationChange,
  } = options

  // Core instance
  const coreRef = useRef<MaskDialCore | null>(null)

  // State
  const [value, setValueState] = useState('')
  const [country, setCountryState] = useState<CountryCode | undefined>(initialCountry)
  const [formatData, setFormatData] = useState<FormatData | null>(null)
  const [isValid, setIsValid] = useState(false)
  const [isPossible, setIsPossible] = useState(false)

  // Input ref for cursor management
  const inputRef = useRef<HTMLInputElement>(null)
  const cursorPositionRef = useRef<number | null>(null)

  // Initialize core
  const core = useMemo(() => {
    if (!coreRef.current) {
      coreRef.current = new MaskDialCore({
        country: initialCountry,
        onFormat: (data) => {
          setFormatData(data)
          onValueChange?.(data)
        },
        onValidate: (valid, possible) => {
          const validChanged = valid !== isValid
          const possibleChanged = possible !== isPossible
          setIsValid(valid)
          setIsPossible(possible)
          if (validChanged || possibleChanged) {
            onValidationChange?.(valid, possible)
          }
        },
      })
    }
    return coreRef.current
  }, [])

  // Update core options when country changes
  useEffect(() => {
    if (core && country !== core.getOptions().country) {
      core.setCountry(country!)
      // Re-format current value with new country
      if (value) {
        const result = core.format(value.replace(/\D/g, ''))
        setValueState(result.formatted)
      }
    }
  }, [country])

  // Format initial value on mount
  useEffect(() => {
    if (initialValue) {
      const result = core.format(initialValue)
      setValueState(result.formatted)
    }
  }, [])

  // Restore cursor position after render
  useEffect(() => {
    if (cursorPositionRef.current !== null && inputRef.current) {
      inputRef.current.setSelectionRange(
        cursorPositionRef.current,
        cursorPositionRef.current
      )
      cursorPositionRef.current = null
    }
  })

  // Set value (formats the input)
  const setValue = useCallback(
    (newValue: string) => {
      const result = core.format(newValue)
      setValueState(result.formatted)
    },
    [core]
  )

  // Set country
  const setCountry = useCallback((newCountry: CountryCode) => {
    setCountryState(newCountry)
  }, [])

  // Handle input change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target
      const oldValue = value
      const newRawValue = input.value
      const cursorPos = input.selectionStart ?? newRawValue.length

      // Format the new value using processInput
      const result = core.processInput(newRawValue, oldValue, cursorPos)
      setValueState(result.formatted)

      // Store cursor position for restoration
      cursorPositionRef.current = result.cursorPosition
    },
    [core, value]
  )

  // Handle key down (for delete/backspace handling)
  const handleKeyDown = useCallback(
    (_e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow default behavior - the formatting handles everything
    },
    []
  )

  // Reset to initial state
  const reset = useCallback(() => {
    setValueState('')
    setCountryState(initialCountry)
    setFormatData(null)
    setIsValid(false)
    setIsPossible(false)
    if (initialValue) {
      const result = core.format(initialValue)
      setValueState(result.formatted)
    }
  }, [core, initialCountry, initialValue])

  // Computed values
  const e164 = formatData?.e164
  const national = formatData?.national ?? value
  const international = core.getInternational() ?? value
  const digits = formatData?.digits ?? value.replace(/\D/g, '')

  // Input props
  const inputProps = useMemo(
    () => ({
      value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      type: 'tel' as const,
      inputMode: 'tel' as const,
      autoComplete: 'tel' as const,
    }),
    [value, handleChange, handleKeyDown]
  )

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
    inputProps,
    inputRef: inputRef as React.RefObject<HTMLInputElement>,
    reset,
  }
}

export default useMaskDial
