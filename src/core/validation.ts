import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  parsePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js/min'

/**
 * Validation result with detailed information
 */
export interface ValidationResult {
  isValid: boolean
  isPossible: boolean
  error?: string
}

/**
 * Validate a phone number for a specific country
 */
export function validatePhoneNumber(
  phoneNumber: string,
  country?: CountryCode
): ValidationResult {
  const digits = phoneNumber.replace(/\D/g, '')

  if (digits.length === 0) {
    return {
      isValid: false,
      isPossible: false,
      error: 'Phone number is empty',
    }
  }

  try {
    const isPossible = country
      ? isPossiblePhoneNumber(digits, country)
      : isPossiblePhoneNumber(phoneNumber)

    const isValid = country
      ? isValidPhoneNumber(digits, country)
      : isValidPhoneNumber(phoneNumber)

    return {
      isValid,
      isPossible,
    }
  } catch (error) {
    return {
      isValid: false,
      isPossible: false,
      error: error instanceof Error ? error.message : 'Validation failed',
    }
  }
}

/**
 * Get E.164 format if the number is valid
 */
export function getE164(phoneNumber: string, country?: CountryCode): string | undefined {
  try {
    const parsed = parsePhoneNumber(phoneNumber, country)
    if (parsed && parsed.isValid()) {
      return parsed.format('E.164')
    }
  } catch {
    // Unable to parse
  }
  return undefined
}

/**
 * Get national format
 */
export function getNationalFormat(phoneNumber: string, country?: CountryCode): string {
  try {
    const parsed = parsePhoneNumber(phoneNumber, country)
    if (parsed) {
      return parsed.formatNational()
    }
  } catch {
    // Unable to parse
  }
  return phoneNumber.replace(/\D/g, '')
}

/**
 * Get international format
 */
export function getInternationalFormat(phoneNumber: string, country?: CountryCode): string {
  try {
    const parsed = parsePhoneNumber(phoneNumber, country)
    if (parsed) {
      return parsed.formatInternational()
    }
  } catch {
    // Unable to parse
  }
  return phoneNumber.replace(/\D/g, '')
}

/**
 * Detect the country from a phone number
 */
export function detectCountry(phoneNumber: string): CountryCode | undefined {
  try {
    const parsed = parsePhoneNumber(phoneNumber)
    return parsed?.country
  } catch {
    // Unable to parse
  }
  return undefined
}

/**
 * Check if a phone number looks like it could be international
 * (starts with + or 00)
 */
export function isInternationalFormat(phoneNumber: string): boolean {
  const trimmed = phoneNumber.trim()
  return trimmed.startsWith('+') || trimmed.startsWith('00')
}
