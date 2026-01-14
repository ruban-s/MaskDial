// jQuery plugin entry point

import { initJQueryPlugin, MaskDialJQueryInstance, JQUERY_EVENTS } from './adapters/jquery'

// Re-export core utilities
export { MaskDialCore } from './core/MaskDialCore'
export { PhoneFormatter, phoneFormatter } from './core/formatter'
export {
  validatePhoneNumber,
  getE164,
  getNationalFormat,
  getInternationalFormat,
  detectCountry,
  isInternationalFormat,
} from './core/validation'

// Export jQuery-specific
export { MaskDialJQueryInstance, JQUERY_EVENTS }

// Types
export type {
  MaskDialOptions,
  MaskDialInstance,
  FormatData,
  FormatResult,
} from './core/types'
export type { CountryCode } from 'libphonenumber-js/min'

// Auto-initialize if jQuery is available globally
declare const jQuery: JQueryStatic | undefined
declare const $: JQueryStatic | undefined

if (typeof jQuery !== 'undefined') {
  initJQueryPlugin(jQuery)
} else if (typeof $ !== 'undefined') {
  initJQueryPlugin($)
}

// Also export the init function for manual initialization
export { initJQueryPlugin }
