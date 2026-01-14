import * as yup from 'yup'
import type { CountryCode } from 'libphonenumber-js/min'
import {
  validatePhoneNumber,
  getE164,
  getNationalFormat,
  getInternationalFormat,
} from '../core/validation'

/**
 * Options for phone number validation
 */
export interface PhoneNumberOptions {
  /** Default country code for parsing national numbers */
  country?: CountryCode
  /** Require the number to be valid (not just possible) */
  strict?: boolean
  /** Custom error message for invalid phone numbers */
  message?: string
}

/**
 * Output formats for phone number transformation
 */
export type PhoneOutputFormat = 'e164' | 'national' | 'international' | 'digits' | 'raw'

// Extend Yup's StringSchema with phone validation methods
declare module 'yup' {
  interface StringSchema {
    phone(options?: PhoneNumberOptions): StringSchema
    phoneTransform(format?: PhoneOutputFormat, country?: CountryCode): StringSchema
  }
}

/**
 * Add phone validation method to Yup string schema
 *
 * @example
 * ```typescript
 * import * as yup from 'yup'
 * import 'maskdial/yup'
 *
 * const schema = yup.object({
 *   phone: yup.string().phone({ country: 'US' }).required()
 * })
 * ```
 */
yup.addMethod(
  yup.string,
  'phone',
  function (options: PhoneNumberOptions = {}) {
    const { country, strict = true, message = 'Invalid phone number' } = options

    return this.test('phone', message, function (value) {
      // Allow empty values (use .required() for mandatory)
      if (!value || value.trim() === '') {
        return true
      }

      const result = validatePhoneNumber(value, country)

      if (strict) {
        return result.isValid
      }

      return result.isPossible
    })
  }
)

/**
 * Add phone transformation method to Yup string schema
 *
 * @example
 * ```typescript
 * import * as yup from 'yup'
 * import 'maskdial/yup'
 *
 * const schema = yup.object({
 *   phone: yup.string().phone({ country: 'US' }).phoneTransform('e164', 'US')
 * })
 *
 * // Input: "(202) 555-1234"
 * // Output: "+12025551234"
 * ```
 */
yup.addMethod(
  yup.string,
  'phoneTransform',
  function (format: PhoneOutputFormat = 'e164', country?: CountryCode) {
    return this.transform(function (value) {
      if (!value || value.trim() === '') {
        return value
      }

      switch (format) {
        case 'e164':
          return getE164(value, country) ?? value
        case 'national':
          return getNationalFormat(value, country)
        case 'international':
          return getInternationalFormat(value, country)
        case 'digits':
          return value.replace(/\D/g, '')
        case 'raw':
        default:
          return value
      }
    })
  }
)

/**
 * Create a phone number schema with preset options
 *
 * @example
 * ```typescript
 * import { yupPhone } from 'maskdial/yup'
 *
 * const schema = yup.object({
 *   phone: yupPhone({ country: 'US' }).required('Phone is required')
 * })
 * ```
 */
export function yupPhone(options: PhoneNumberOptions = {}) {
  return yup.string().phone(options)
}

/**
 * Create a phone number schema for a specific country
 *
 * @example
 * ```typescript
 * import { yupPhoneForCountry } from 'maskdial/yup'
 *
 * const usPhone = yupPhoneForCountry('US')
 * const ukPhone = yupPhoneForCountry('GB')
 *
 * const schema = yup.object({
 *   homePhone: usPhone.required(),
 *   workPhone: ukPhone.required()
 * })
 * ```
 */
export function yupPhoneForCountry(
  country: CountryCode,
  options: Omit<PhoneNumberOptions, 'country'> = {}
) {
  return yupPhone({ ...options, country })
}

/**
 * Create a phone schema that transforms output to E.164 format
 *
 * @example
 * ```typescript
 * import { yupPhoneE164 } from 'maskdial/yup'
 *
 * const schema = yup.object({
 *   phone: yupPhoneE164('US').required()
 * })
 *
 * // Input: "(202) 555-1234"
 * // Output after validation: "+12025551234"
 * ```
 */
export function yupPhoneE164(country?: CountryCode, options: PhoneNumberOptions = {}) {
  return yupPhone({ ...options, country }).phoneTransform('e164', country)
}

/**
 * Validation test function for use with custom Yup schemas
 *
 * @example
 * ```typescript
 * import * as yup from 'yup'
 * import { isValidPhoneTest } from 'maskdial/yup'
 *
 * const schema = yup.object({
 *   phone: yup.string().test('phone', 'Invalid phone', isValidPhoneTest('US'))
 * })
 * ```
 */
export function isValidPhoneTest(country?: CountryCode, strict = true) {
  return function (value: string | undefined): boolean {
    if (!value || value.trim() === '') {
      return true // Let .required() handle empty values
    }

    const result = validatePhoneNumber(value, country)

    if (strict) {
      return result.isValid
    }

    return result.isPossible
  }
}

// Re-export CountryCode type for convenience
export type { CountryCode }

// Export yup for convenience
export { yup }

// Default export
export default yupPhone
