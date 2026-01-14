import { z } from 'zod'
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
  /** Custom error message for empty input */
  requiredMessage?: string
}

/**
 * Output formats for phone number transformation
 */
export type PhoneOutputFormat = 'e164' | 'national' | 'international' | 'digits' | 'raw'

/**
 * Transform options for phone number schema
 */
export interface PhoneTransformOptions extends PhoneNumberOptions {
  /** Output format for the phone number */
  format?: PhoneOutputFormat
}

/**
 * Create a Zod phone number validation schema
 *
 * @example
 * ```typescript
 * import { z } from 'zod'
 * import { phoneNumber } from 'maskdial/zod'
 *
 * // Basic usage
 * const schema = z.object({
 *   phone: phoneNumber()
 * })
 *
 * // With country
 * const usSchema = z.object({
 *   phone: phoneNumber({ country: 'US' })
 * })
 *
 * // Strict validation (must be valid, not just possible)
 * const strictSchema = z.object({
 *   phone: phoneNumber({ country: 'US', strict: true })
 * })
 *
 * // Custom error message
 * const customSchema = z.object({
 *   phone: phoneNumber({
 *     country: 'US',
 *     message: 'Please enter a valid US phone number'
 *   })
 * })
 * ```
 */
export function phoneNumber(options: PhoneNumberOptions = {}) {
  const {
    country,
    strict = true,
    message = 'Invalid phone number',
    requiredMessage = 'Phone number is required',
  } = options

  return z.string({ required_error: requiredMessage }).refine(
    (value) => {
      if (!value || value.trim() === '') {
        return false
      }

      const result = validatePhoneNumber(value, country)

      if (strict) {
        return result.isValid
      }

      return result.isPossible
    },
    { message }
  )
}

/**
 * Create a Zod phone number schema with output transformation
 *
 * @example
 * ```typescript
 * import { z } from 'zod'
 * import { phoneNumberTransform } from 'maskdial/zod'
 *
 * // Transform to E.164 format
 * const schema = z.object({
 *   phone: phoneNumberTransform({ country: 'US', format: 'e164' })
 * })
 *
 * // Input: "(202) 555-1234"
 * // Output: "+12025551234"
 * ```
 */
export function phoneNumberTransform(options: PhoneTransformOptions = {}) {
  const {
    country,
    strict = true,
    message = 'Invalid phone number',
    requiredMessage = 'Phone number is required',
    format = 'e164',
  } = options

  return z
    .string({ required_error: requiredMessage })
    .refine(
      (value) => {
        if (!value || value.trim() === '') {
          return false
        }

        const result = validatePhoneNumber(value, country)

        if (strict) {
          return result.isValid
        }

        return result.isPossible
      },
      { message }
    )
    .transform((value) => {
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

/**
 * Create an optional phone number schema (allows empty string or undefined)
 *
 * @example
 * ```typescript
 * import { z } from 'zod'
 * import { optionalPhoneNumber } from 'maskdial/zod'
 *
 * const schema = z.object({
 *   phone: optionalPhoneNumber({ country: 'US' })
 * })
 *
 * // Valid: undefined, "", "(202) 555-1234"
 * // Invalid: "123" (partial number)
 * ```
 */
export function optionalPhoneNumber(options: PhoneNumberOptions = {}) {
  const { country, strict = true, message = 'Invalid phone number' } = options

  return z
    .string()
    .optional()
    .refine(
      (value) => {
        // Allow empty or undefined
        if (!value || value.trim() === '') {
          return true
        }

        const result = validatePhoneNumber(value, country)

        if (strict) {
          return result.isValid
        }

        return result.isPossible
      },
      { message }
    )
}

/**
 * Zod refinement function for use with existing schemas
 *
 * @example
 * ```typescript
 * import { z } from 'zod'
 * import { isValidPhone } from 'maskdial/zod'
 *
 * const schema = z.object({
 *   phone: z.string().refine(isValidPhone('US'), {
 *     message: 'Invalid US phone number'
 *   })
 * })
 * ```
 */
export function isValidPhone(country?: CountryCode, strict = true) {
  return (value: string): boolean => {
    if (!value || value.trim() === '') {
      return false
    }

    const result = validatePhoneNumber(value, country)

    if (strict) {
      return result.isValid
    }

    return result.isPossible
  }
}

/**
 * Create a phone number schema for a specific country with preset options
 *
 * @example
 * ```typescript
 * import { createCountryPhoneSchema } from 'maskdial/zod'
 *
 * const usPhone = createCountryPhoneSchema('US')
 * const ukPhone = createCountryPhoneSchema('GB')
 *
 * const schema = z.object({
 *   homePhone: usPhone,
 *   workPhone: ukPhone
 * })
 * ```
 */
export function createCountryPhoneSchema(
  country: CountryCode,
  options: Omit<PhoneNumberOptions, 'country'> = {}
) {
  return phoneNumber({ ...options, country })
}

// Re-export CountryCode type for convenience
export type { CountryCode }

// Default export for simple usage
export default phoneNumber
