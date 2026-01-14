// Main entry point for vanilla JavaScript usage

// Core classes and utilities
export { MaskDialCore } from './core/MaskDialCore'
export { PhoneFormatter, phoneFormatter } from './core/formatter'
export {
  calculateCursorPosition,
  countDigits,
  isDigit,
  getNthDigitPosition,
  isDeleteOperation,
} from './core/cursor'
export {
  validatePhoneNumber,
  getE164,
  getNationalFormat,
  getInternationalFormat,
  detectCountry,
  isInternationalFormat,
} from './core/validation'

// Vanilla adapter
export { MaskDial, EVENTS } from './adapters/vanilla'

// Types
export type {
  MaskDialOptions,
  MaskDialInstance,
  FormatData,
  FormatResult,
  FormatterState,
  CursorInput,
  MaskDialEventType,
  FormatEventDetail,
  ValidateEventDetail,
  CountryChangeEventDetail,
} from './core/types'

// Re-export CountryCode type from libphonenumber-js for convenience
export type { CountryCode } from 'libphonenumber-js/min'
