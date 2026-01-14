import type { CountryCode } from 'libphonenumber-js/min'
import type { MaskDialOptions, FormatData, FormatResult } from './types'
import { PhoneFormatter } from './formatter'
import { calculateCursorPosition, isDeleteOperation } from './cursor'

/**
 * Core formatting engine - framework agnostic
 * Handles all phone number formatting logic without DOM dependencies
 */
export class MaskDialCore {
  private options: Required<MaskDialOptions>
  private formatter: PhoneFormatter
  private lastFormatResult: FormatResult | null = null
  private lastValidState: boolean = false
  private lastCountry: CountryCode | undefined

  constructor(options: MaskDialOptions = {}) {
    this.options = this.normalizeOptions(options)
    this.formatter = new PhoneFormatter()
  }

  /**
   * Normalize options with defaults
   */
  private normalizeOptions(options: MaskDialOptions): Required<MaskDialOptions> {
    return {
      country: options.country as CountryCode,
      defaultCountry: options.defaultCountry as CountryCode,
      international: options.international ?? false,
      placeholder: options.placeholder ?? '',
      onFormat: options.onFormat ?? (() => {}),
      onValidate: options.onValidate ?? (() => {}),
      onCountryChange: options.onCountryChange ?? (() => {}),
    }
  }

  /**
   * Process input and return formatted result with cursor position
   */
  processInput(
    newValue: string,
    oldValue: string = '',
    oldCursorPosition: number = newValue.length
  ): { formatted: string; cursorPosition: number; data: FormatData } {
    const isDelete = isDeleteOperation(oldValue, newValue)
    const effectiveCountry = this.options.country || this.options.defaultCountry

    // Format the input
    const result = this.formatter.format(newValue, effectiveCountry)

    // Use international format if option is enabled
    const formatted = this.options.international && result.international
      ? result.international
      : result.formatted

    // Calculate cursor position
    const cursorPosition = calculateCursorPosition({
      oldValue,
      newValue: formatted,
      oldCursorPosition,
      isDelete,
    })

    // Build format data
    const data: FormatData = {
      formatted,
      e164: result.e164,
      national: result.national,
      digits: result.digits,
      country: result.country,
      countryCallingCode: result.countryCallingCode,
      isValid: result.isValid,
      isPossible: result.isPossible,
      template: result.template,
    }

    // Trigger callbacks
    this.triggerCallbacks(data)

    // Store last result
    this.lastFormatResult = result

    return { formatted, cursorPosition, data }
  }

  /**
   * Trigger appropriate callbacks based on state changes
   */
  private triggerCallbacks(data: FormatData): void {
    // Always trigger format callback
    this.options.onFormat(data)

    // Trigger validate callback if validity changed
    if (data.isValid !== this.lastValidState) {
      this.lastValidState = data.isValid
      this.options.onValidate(data.isValid, data.isPossible)
    }

    // Trigger country change callback if country changed
    if (data.country !== this.lastCountry) {
      this.lastCountry = data.country
      this.options.onCountryChange(data.country)
    }
  }

  /**
   * Format a value without cursor calculation (for programmatic use)
   */
  format(value: string): FormatData {
    const effectiveCountry = this.options.country || this.options.defaultCountry
    const result = this.formatter.format(value, effectiveCountry)

    const formatted = this.options.international && result.international
      ? result.international
      : result.formatted

    return {
      formatted,
      e164: result.e164,
      national: result.national,
      digits: result.digits,
      country: result.country,
      countryCallingCode: result.countryCallingCode,
      isValid: result.isValid,
      isPossible: result.isPossible,
      template: result.template,
    }
  }

  /**
   * Get current formatted value
   */
  getValue(): string {
    return this.lastFormatResult?.formatted ?? ''
  }

  /**
   * Get E.164 format
   */
  getE164(): string | undefined {
    return this.lastFormatResult?.e164
  }

  /**
   * Get national format
   */
  getNational(): string {
    return this.lastFormatResult?.national ?? ''
  }

  /**
   * Get international format
   */
  getInternational(): string {
    return this.lastFormatResult?.international ?? ''
  }

  /**
   * Get raw digits
   */
  getDigits(): string {
    return this.lastFormatResult?.digits ?? ''
  }

  /**
   * Check if current value is valid
   */
  isValid(): boolean {
    return this.lastFormatResult?.isValid ?? false
  }

  /**
   * Check if current value is possibly valid
   */
  isPossible(): boolean {
    return this.lastFormatResult?.isPossible ?? false
  }

  /**
   * Get current country
   */
  getCountry(): CountryCode | undefined {
    return this.lastFormatResult?.country
  }

  /**
   * Get country calling code
   */
  getCountryCallingCode(): string | undefined {
    return this.lastFormatResult?.countryCallingCode
  }

  /**
   * Set the country
   */
  setCountry(country: CountryCode): void {
    this.options.country = country
  }

  /**
   * Get current options
   */
  getOptions(): MaskDialOptions {
    return { ...this.options }
  }

  /**
   * Update options
   */
  setOptions(options: Partial<MaskDialOptions>): void {
    this.options = this.normalizeOptions({
      ...this.options,
      ...options,
    })
  }

  /**
   * Reset internal state
   */
  reset(): void {
    this.lastFormatResult = null
    this.lastValidState = false
    this.lastCountry = undefined
    this.formatter.clearCache()
  }
}
