import type { CountryCode } from 'libphonenumber-js/min'
import type { MaskDialOptions, MaskDialInstance } from '../core/types'
import { MaskDialCore } from '../core/MaskDialCore'

// Declare jQuery types
declare global {
  interface JQuery {
    maskDial(options?: MaskDialOptions): JQuery
    maskDial(method: 'instance'): MaskDialJQueryInstance | undefined
    maskDial(method: 'destroy'): JQuery
    maskDial(method: 'getValue'): string
    maskDial(method: 'getE164'): string | undefined
    maskDial(method: 'getNational'): string
    maskDial(method: 'getInternational'): string
    maskDial(method: 'getDigits'): string
    maskDial(method: 'isValid'): boolean
    maskDial(method: 'isPossible'): boolean
    maskDial(method: 'getCountry'): CountryCode | undefined
    maskDial(method: 'setCountry', country: CountryCode): JQuery
    maskDial(method: 'setOptions', options: Partial<MaskDialOptions>): JQuery
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    maskDial(methodOrOptions?: string | MaskDialOptions, ...args: unknown[]): any
  }
}

/**
 * jQuery event names
 */
export const JQUERY_EVENTS = {
  FORMAT: 'maskdial:format',
  VALIDATE: 'maskdial:validate',
  COUNTRY_CHANGE: 'maskdial:countrychange',
} as const

/**
 * Data key for storing instance
 */
const DATA_KEY = 'maskDial'

/**
 * jQuery MaskDial instance
 */
export class MaskDialJQueryInstance implements MaskDialInstance {
  private $element: JQuery<HTMLInputElement>
  private element: HTMLInputElement
  private core: MaskDialCore
  private isComposing = false

  constructor($element: JQuery<HTMLInputElement>, options: MaskDialOptions = {}) {
    this.$element = $element
    this.element = $element[0]

    // Create core with jQuery event triggers
    this.core = new MaskDialCore({
      ...options,
      onFormat: (data) => {
        this.$element.trigger(JQUERY_EVENTS.FORMAT, [data])
        options.onFormat?.(data)
      },
      onValidate: (isValid, isPossible) => {
        this.$element.trigger(JQUERY_EVENTS.VALIDATE, [isValid, isPossible])
        options.onValidate?.(isValid, isPossible)
      },
      onCountryChange: (country) => {
        this.$element.trigger(JQUERY_EVENTS.COUNTRY_CHANGE, [country])
        options.onCountryChange?.(country)
      },
    })

    // Attach event listeners
    this.attachListeners()

    // Set input type for mobile
    this.$element.attr('type', 'tel')

    // Format initial value
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  /**
   * Attach jQuery event listeners
   */
  private attachListeners(): void {
    this.$element
      .on('input.maskdial', this.handleInput.bind(this))
      .on('focus.maskdial', this.handleFocus.bind(this))
      .on('blur.maskdial', this.handleBlur.bind(this))
      .on('paste.maskdial', this.handlePaste.bind(this))
      .on('keydown.maskdial', this.handleKeydown.bind(this))
      .on('compositionstart.maskdial', this.handleCompositionStart.bind(this))
      .on('compositionend.maskdial', this.handleCompositionEnd.bind(this))
  }

  /**
   * Handle input event
   */
  private handleInput(): void {
    if (this.isComposing) return

    const cursorPosition = this.element.selectionStart ?? this.element.value.length
    this.formatValue(this.element.value, cursorPosition)
  }

  /**
   * Handle focus event
   */
  private handleFocus(): void {
    // Placeholder for focus behavior
  }

  /**
   * Handle blur event
   */
  private handleBlur(): void {
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  /**
   * Handle paste event
   */
  private handlePaste(): void {
    requestAnimationFrame(() => {
      this.formatValue(this.element.value)
    })
  }

  /**
   * Handle keydown event
   */
  private handleKeydown(e: JQuery.KeyDownEvent): void {
    if (e.ctrlKey || e.metaKey) return

    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Enter',
      'Home',
      'End',
    ]
    if (allowedKeys.includes(e.key)) return

    if (!/[\d+]/.test(e.key)) {
      if (e.key === '+' && this.element.selectionStart !== 0) {
        e.preventDefault()
      } else if (e.key !== '+') {
        e.preventDefault()
      }
    }
  }

  /**
   * Handle composition start
   */
  private handleCompositionStart(): void {
    this.isComposing = true
  }

  /**
   * Handle composition end
   */
  private handleCompositionEnd(): void {
    this.isComposing = false
    this.handleInput()
  }

  /**
   * Format value and update input
   */
  private formatValue(value: string, cursorPosition?: number): void {
    const oldValue = this.element.value
    const oldCursor = cursorPosition ?? this.element.selectionStart ?? value.length

    const result = this.core.processInput(value, oldValue, oldCursor)

    // Update value
    this.element.value = result.formatted

    // Restore cursor
    requestAnimationFrame(() => {
      if (document.activeElement === this.element) {
        this.element.setSelectionRange(result.cursorPosition, result.cursorPosition)
      }
    })
  }

  // Public API

  getValue(): string {
    return this.element.value
  }

  getE164(): string | undefined {
    return this.core.getE164()
  }

  getNational(): string {
    return this.core.getNational()
  }

  getInternational(): string {
    return this.core.getInternational()
  }

  getDigits(): string {
    return this.core.getDigits()
  }

  isValid(): boolean {
    return this.core.isValid()
  }

  isPossible(): boolean {
    return this.core.isPossible()
  }

  getCountry(): CountryCode | undefined {
    return this.core.getCountry()
  }

  getCountryCallingCode(): string | undefined {
    return this.core.getCountryCallingCode()
  }

  setCountry(country: CountryCode): void {
    this.core.setCountry(country)
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  getOptions(): MaskDialOptions {
    return this.core.getOptions()
  }

  setOptions(options: Partial<MaskDialOptions>): void {
    this.core.setOptions(options)
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  destroy(): void {
    this.$element.off('.maskdial')
    this.$element.removeData(DATA_KEY)
    this.core.reset()
  }
}

/**
 * Initialize jQuery plugin
 */
export function initJQueryPlugin(jQuery: JQueryStatic): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (jQuery.fn as any).maskDial = function (
    this: JQuery<HTMLInputElement>,
    optionsOrMethod?: MaskDialOptions | string,
    ...args: unknown[]
  ): JQuery | MaskDialJQueryInstance | string | boolean | CountryCode | undefined {
    // Method call
    if (typeof optionsOrMethod === 'string') {
      const method = optionsOrMethod
      const instance = this.first().data(DATA_KEY) as MaskDialJQueryInstance | undefined

      switch (method) {
        case 'instance':
          return instance

        case 'destroy':
          this.each(function () {
            const inst = jQuery(this).data(DATA_KEY) as MaskDialJQueryInstance | undefined
            inst?.destroy()
          })
          return this

        case 'getValue':
          return instance?.getValue() ?? ''

        case 'getE164':
          return instance?.getE164()

        case 'getNational':
          return instance?.getNational() ?? ''

        case 'getInternational':
          return instance?.getInternational() ?? ''

        case 'getDigits':
          return instance?.getDigits() ?? ''

        case 'isValid':
          return instance?.isValid() ?? false

        case 'isPossible':
          return instance?.isPossible() ?? false

        case 'getCountry':
          return instance?.getCountry()

        case 'setCountry':
          this.each(function () {
            const inst = jQuery(this).data(DATA_KEY) as MaskDialJQueryInstance | undefined
            inst?.setCountry(args[0] as CountryCode)
          })
          return this

        case 'setOptions':
          this.each(function () {
            const inst = jQuery(this).data(DATA_KEY) as MaskDialJQueryInstance | undefined
            inst?.setOptions(args[0] as Partial<MaskDialOptions>)
          })
          return this

        default:
          throw new Error(`MaskDial: Unknown method: ${method}`)
      }
    }

    // Initialize
    const options = optionsOrMethod as MaskDialOptions | undefined

    this.each(function () {
      const $el = jQuery(this) as JQuery<HTMLInputElement>

      // Skip if already initialized
      if ($el.data(DATA_KEY)) return

      // Create instance
      const instance = new MaskDialJQueryInstance($el, options)
      $el.data(DATA_KEY, instance)
    })

    return this
  }
}
