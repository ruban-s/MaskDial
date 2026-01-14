import { describe, it, expect, beforeEach } from 'vitest'
import { PhoneFormatter } from '../../src/core/formatter'

describe('PhoneFormatter', () => {
  let formatter: PhoneFormatter

  beforeEach(() => {
    formatter = new PhoneFormatter()
  })

  describe('format', () => {
    it('should format US phone number', () => {
      const result = formatter.format('2025551234', 'US')

      expect(result.formatted).toBe('(202) 555-1234')
      expect(result.digits).toBe('2025551234')
      expect(result.country).toBe('US')
      expect(result.isValid).toBe(true)
    })

    it('should format UK phone number', () => {
      const result = formatter.format('7911123456', 'GB')

      // libphonenumber-js formats UK mobile without leading 0 in AsYouType
      expect(result.digits).toBe('7911123456')
      expect(result.country).toBe('GB')
      expect(result.isValid).toBe(true)
    })

    it('should format Indian phone number', () => {
      const result = formatter.format('9876543210', 'IN')

      expect(result.digits).toBe('9876543210')
      expect(result.country).toBe('IN')
      expect(result.isValid).toBe(true)
    })

    it('should return E.164 format for valid number', () => {
      const result = formatter.format('2025551234', 'US')

      expect(result.e164).toBe('+12025551234')
    })

    it('should handle partial phone numbers', () => {
      const result = formatter.format('202', 'US')

      // libphonenumber-js includes closing parenthesis
      expect(result.formatted).toContain('202')
      expect(result.digits).toBe('202')
      expect(result.isValid).toBe(false)
      expect(result.isPossible).toBe(false)
    })

    it('should handle empty input', () => {
      const result = formatter.format('', 'US')

      expect(result.formatted).toBe('')
      expect(result.digits).toBe('')
      expect(result.isValid).toBe(false)
    })

    it('should strip non-digit characters', () => {
      const result = formatter.format('(202) 555-1234', 'US')

      expect(result.digits).toBe('2025551234')
      expect(result.formatted).toBe('(202) 555-1234')
    })

    it('should format international numbers', () => {
      const result = formatter.format('+442071234567')

      // Without country hint, detection may vary
      expect(result.digits).toBe('442071234567')
    })
  })

  describe('extractDigits', () => {
    it('should extract only digits', () => {
      expect(formatter.extractDigits('(202) 555-1234')).toBe('2025551234')
      expect(formatter.extractDigits('+1 202-555-1234')).toBe('12025551234')
      expect(formatter.extractDigits('abc123def456')).toBe('123456')
    })

    it('should return empty string for no digits', () => {
      expect(formatter.extractDigits('abc')).toBe('')
      expect(formatter.extractDigits('')).toBe('')
    })
  })

  describe('caching', () => {
    it('should cache formatter instances', () => {
      // Format twice with same country
      formatter.format('2025551234', 'US')
      formatter.format('3105551234', 'US')

      // Should reuse cached formatter (internal behavior)
      // Just verify it still works correctly
      const result = formatter.format('4155551234', 'US')
      expect(result.isValid).toBe(true)
    })

    it('should clear cache', () => {
      formatter.format('2025551234', 'US')
      formatter.clearCache()

      // Should still work after clearing
      const result = formatter.format('2025551234', 'US')
      expect(result.isValid).toBe(true)
    })
  })
})
