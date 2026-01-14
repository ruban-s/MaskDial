import type { CountryCode } from 'libphonenumber-js/min'
import type {
  MaskDialOptions,
  MaskDialInstance,
  FormatEventDetail,
  ValidateEventDetail,
  CountryChangeEventDetail,
} from '../core/types'
import { MaskDialCore } from '../core/MaskDialCore'

/**
 * Custom event names
 */
export const EVENTS = {
  FORMAT: 'maskdial:format',
  VALIDATE: 'maskdial:validate',
  COUNTRY_CHANGE: 'maskdial:countrychange',
} as const

/**
 * Vanilla JavaScript MaskDial class
 * Binds to an input element and handles phone number formatting
 */
export class MaskDial implements MaskDialInstance {
  private element: HTMLInputElement
  private core: MaskDialCore
  private isComposing = false

  // Bound event handlers for cleanup
  private handleInputBound: (e: Event) => void
  private handleFocusBound: () => void
  private handleBlurBound: () => void
  private handlePasteBound: (e: ClipboardEvent) => void
  private handleKeydownBound: (e: KeyboardEvent) => void
  private handleCompositionStartBound: () => void
  private handleCompositionEndBound: () => void

  constructor(element: HTMLInputElement | string, options: MaskDialOptions = {}) {
    // Resolve element
    if (typeof element === 'string') {
      const el = document.querySelector<HTMLInputElement>(element)
      if (!el) {
        throw new Error(`MaskDial: Element not found: ${element}`)
      }
      this.element = el
    } else {
      this.element = element
    }

    // Validate element type
    if (!(this.element instanceof HTMLInputElement)) {
      throw new Error('MaskDial: Element must be an input element')
    }

    // Create core with wrapped callbacks
    this.core = new MaskDialCore({
      ...options,
      onFormat: (data) => {
        this.emitEvent(EVENTS.FORMAT, { data })
        options.onFormat?.(data)
      },
      onValidate: (isValid, isPossible) => {
        this.emitEvent(EVENTS.VALIDATE, { isValid, isPossible })
        options.onValidate?.(isValid, isPossible)
      },
      onCountryChange: (country) => {
        this.emitEvent(EVENTS.COUNTRY_CHANGE, { country })
        options.onCountryChange?.(country)
      },
    })

    // Bind event handlers
    this.handleInputBound = this.handleInput.bind(this)
    this.handleFocusBound = this.handleFocus.bind(this)
    this.handleBlurBound = this.handleBlur.bind(this)
    this.handlePasteBound = this.handlePaste.bind(this)
    this.handleKeydownBound = this.handleKeydown.bind(this)
    this.handleCompositionStartBound = this.handleCompositionStart.bind(this)
    this.handleCompositionEndBound = this.handleCompositionEnd.bind(this)

    // Attach event listeners
    this.attachListeners()

    // Set input type for better mobile experience
    this.element.setAttribute('type', 'tel')

    // Format initial value if present
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  /**
   * Attach DOM event listeners
   */
  private attachListeners(): void {
    this.element.addEventListener('input', this.handleInputBound)
    this.element.addEventListener('focus', this.handleFocusBound)
    this.element.addEventListener('blur', this.handleBlurBound)
    this.element.addEventListener('paste', this.handlePasteBound)
    this.element.addEventListener('keydown', this.handleKeydownBound)
    this.element.addEventListener('compositionstart', this.handleCompositionStartBound)
    this.element.addEventListener('compositionend', this.handleCompositionEndBound)
  }

  /**
   * Detach DOM event listeners
   */
  private detachListeners(): void {
    this.element.removeEventListener('input', this.handleInputBound)
    this.element.removeEventListener('focus', this.handleFocusBound)
    this.element.removeEventListener('blur', this.handleBlurBound)
    this.element.removeEventListener('paste', this.handlePasteBound)
    this.element.removeEventListener('keydown', this.handleKeydownBound)
    this.element.removeEventListener('compositionstart', this.handleCompositionStartBound)
    this.element.removeEventListener('compositionend', this.handleCompositionEndBound)
  }

  /**
   * Handle input event
   */
  private handleInput(): void {
    // Skip during IME composition
    if (this.isComposing) return

    const cursorPosition = this.element.selectionStart ?? this.element.value.length
    this.formatValue(this.element.value, cursorPosition)
  }

  /**
   * Handle focus event
   */
  private handleFocus(): void {
    // Optionally format on focus if empty
    if (this.element.value.length === 0) {
      // Could add placeholder behavior here
    }
  }

  /**
   * Handle blur event
   */
  private handleBlur(): void {
    // Ensure value is formatted on blur
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  /**
   * Handle paste event
   */
  private handlePaste(_e: ClipboardEvent): void {
    // Let the input event handle it, just format after paste
    requestAnimationFrame(() => {
      this.formatValue(this.element.value)
    })
  }

  /**
   * Handle keydown for special keys
   */
  private handleKeydown(e: KeyboardEvent): void {
    // Allow control keys
    if (e.ctrlKey || e.metaKey) return

    // Allow navigation keys
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

    // Only allow digits and + at the start
    if (!/[\d+]/.test(e.key)) {
      // Allow + only at the start
      if (e.key === '+' && this.element.selectionStart !== 0) {
        e.preventDefault()
      } else if (e.key !== '+') {
        e.preventDefault()
      }
    }
  }

  /**
   * Handle composition start (IME input)
   */
  private handleCompositionStart(): void {
    this.isComposing = true
  }

  /**
   * Handle composition end (IME input)
   */
  private handleCompositionEnd(): void {
    this.isComposing = false
    this.handleInput()
  }

  /**
   * Format the current value and update the input
   */
  private formatValue(value: string, cursorPosition?: number): void {
    const oldValue = this.element.value
    const oldCursor = cursorPosition ?? this.element.selectionStart ?? value.length

    const result = this.core.processInput(value, oldValue, oldCursor)

    // Update input value
    this.element.value = result.formatted

    // Restore cursor position
    requestAnimationFrame(() => {
      if (document.activeElement === this.element) {
        this.element.setSelectionRange(result.cursorPosition, result.cursorPosition)
      }
    })
  }

  /**
   * Emit a custom event on the element
   */
  private emitEvent(
    eventName: string,
    detail: FormatEventDetail | ValidateEventDetail | CountryChangeEventDetail
  ): void {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: false,
    })
    this.element.dispatchEvent(event)
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
    // Re-format with new country
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  getOptions(): MaskDialOptions {
    return this.core.getOptions()
  }

  setOptions(options: Partial<MaskDialOptions>): void {
    this.core.setOptions(options)
    // Re-format with new options
    if (this.element.value) {
      this.formatValue(this.element.value)
    }
  }

  destroy(): void {
    this.detachListeners()
    this.core.reset()
  }
}
