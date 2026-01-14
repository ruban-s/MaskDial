import {
  AsYouType,
  parsePhoneNumber,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  getCountryCallingCode,
  type CountryCode,
} from 'libphonenumber-js/min'
import type { FormatResult } from './types'

/**
 * Phone number formatter using libphonenumber-js
 * Provides caching for O(1) formatter instance retrieval
 */
export class PhoneFormatter {
  private formatterCache = new Map<string, AsYouType>()

  /**
   * Get or create a cached AsYouType formatter for the given country
   */
  private getFormatter(country?: CountryCode): AsYouType {
    const key = country || '__default__'

    if (!this.formatterCache.has(key)) {
      this.formatterCache.set(key, new AsYouType(country))
    }

    // Reset the formatter for reuse
    const formatter = this.formatterCache.get(key)!
    formatter.reset()
    return formatter
  }

  /**
   * Format a phone number string
   */
  format(input: string, country?: CountryCode): FormatResult {
    const digits = this.extractDigits(input)
    const formatter = this.getFormatter(country)

    // Format the number
    const formatted = formatter.input(digits)

    // Get detected country (may differ from input country)
    const detectedCountry = formatter.getCountry()
    const effectiveCountry = detectedCountry || country

    // Get template if available
    const template = formatter.getTemplate()

    // Parse for additional info
    let e164: string | undefined
    let national = formatted
    let international = formatted
    let countryCallingCode: string | undefined
    let isValid = false
    let isPossible = false

    if (digits.length > 0) {
      try {
        // Validate using the effective country
        if (effectiveCountry) {
          isValid = isValidPhoneNumber(digits, effectiveCountry)
          isPossible = isPossiblePhoneNumber(digits, effectiveCountry)

          // Get country calling code
          try {
            countryCallingCode = getCountryCallingCode(effectiveCountry)
          } catch {
            // Country may not have a calling code
          }
        }

        // Parse for E.164 and formatted outputs
        const parsed = parsePhoneNumber(digits, effectiveCountry)
        if (parsed) {
          e164 = parsed.format('E.164')
          national = parsed.formatNational()
          international = parsed.formatInternational()
          countryCallingCode = parsed.countryCallingCode
        }
      } catch {
        // Number may not be parseable yet (incomplete)
      }
    }

    return {
      formatted,
      e164,
      national,
      international,
      digits,
      country: effectiveCountry,
      countryCallingCode,
      isValid,
      isPossible,
      template,
    }
  }

  /**
   * Extract only digits from a string
   */
  extractDigits(input: string): string {
    return input.replace(/\D/g, '')
  }

  /**
   * Clear formatter cache
   */
  clearCache(): void {
    this.formatterCache.clear()
  }
}

// Singleton instance for shared use
export const phoneFormatter = new PhoneFormatter()
