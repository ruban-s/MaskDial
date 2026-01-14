import type { CountryCode } from 'libphonenumber-js'

/**
 * Configuration options for MaskDial
 */
export interface MaskDialOptions {
  /** ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'IN') */
  country?: CountryCode
  /** Fallback country when auto-detection fails */
  defaultCountry?: CountryCode
  /** Show international format with country code prefix */
  international?: boolean
  /** Placeholder character for unfilled digits (default: none) */
  placeholder?: string
  /** Called after each format operation */
  onFormat?: (data: FormatData) => void
  /** Called when validation state changes */
  onValidate?: (isValid: boolean, isPossible: boolean) => void
  /** Called when detected country changes */
  onCountryChange?: (country: CountryCode | undefined) => void
}

/**
 * Data returned after formatting a phone number
 */
export interface FormatData {
  /** Formatted display value */
  formatted: string
  /** E.164 format (e.g., +12025551234) */
  e164: string | undefined
  /** National format without country code */
  national: string
  /** Raw digits only */
  digits: string
  /** Detected or specified country ISO code */
  country: CountryCode | undefined
  /** Is the number valid for the detected country */
  isValid: boolean
  /** Is the number possibly valid (less strict) */
  isPossible: boolean
  /** Format template (e.g., "(xxx) xxx-xxxx") */
  template: string | undefined
  /** Country calling code (e.g., "1" for US) */
  countryCallingCode: string | undefined
}

/**
 * Public interface for MaskDial instances
 */
export interface MaskDialInstance {
  /** Get current formatted value */
  getValue(): string
  /** Get E.164 format (+12025551234) */
  getE164(): string | undefined
  /** Get national format (e.g., (202) 555-1234) */
  getNational(): string
  /** Get international format (e.g., +1 202 555 1234) */
  getInternational(): string
  /** Get raw digits only */
  getDigits(): string
  /** Check if number is valid */
  isValid(): boolean
  /** Check if number is possibly valid (less strict) */
  isPossible(): boolean
  /** Get detected or specified country */
  getCountry(): CountryCode | undefined
  /** Get country calling code */
  getCountryCallingCode(): string | undefined
  /** Change the country */
  setCountry(country: CountryCode): void
  /** Get current options */
  getOptions(): MaskDialOptions
  /** Update options */
  setOptions(options: Partial<MaskDialOptions>): void
  /** Remove event listeners and cleanup */
  destroy(): void
}

/**
 * Internal state for the formatter
 */
export interface FormatterState {
  rawValue: string
  formattedValue: string
  country: CountryCode | undefined
  isValid: boolean
  isPossible: boolean
  cursorPosition: number
}

/**
 * Result from core formatting operation
 */
export interface FormatResult {
  formatted: string
  e164: string | undefined
  national: string
  international: string
  digits: string
  country: CountryCode | undefined
  countryCallingCode: string | undefined
  isValid: boolean
  isPossible: boolean
  template: string | undefined
}

/**
 * Cursor position calculation input
 */
export interface CursorInput {
  oldValue: string
  newValue: string
  oldCursorPosition: number
  isDelete: boolean
}

/**
 * Event types for vanilla JS adapter
 */
export type MaskDialEventType = 'format' | 'validate' | 'countrychange'

/**
 * Custom event detail for format event
 */
export interface FormatEventDetail {
  data: FormatData
}

/**
 * Custom event detail for validate event
 */
export interface ValidateEventDetail {
  isValid: boolean
  isPossible: boolean
}

/**
 * Custom event detail for country change event
 */
export interface CountryChangeEventDetail {
  country: CountryCode | undefined
}
