import { describe, it, expect } from 'vitest'
import {
  validatePhoneNumber,
  getE164,
  getNationalFormat,
  getInternationalFormat,
  detectCountry,
  isInternationalFormat,
} from '../../src/core/validation'

describe('validation utilities', () => {
  describe('validatePhoneNumber', () => {
    it('should validate correct US number', () => {
      const result = validatePhoneNumber('2025551234', 'US')

      expect(result.isValid).toBe(true)
      expect(result.isPossible).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it('should invalidate incomplete number', () => {
      const result = validatePhoneNumber('202', 'US')

      expect(result.isValid).toBe(false)
      expect(result.isPossible).toBe(false)
    })

    it('should handle empty input', () => {
      const result = validatePhoneNumber('', 'US')

      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Phone number is empty')
    })

    it('should validate UK number', () => {
      const result = validatePhoneNumber('7911123456', 'GB')

      expect(result.isValid).toBe(true)
    })
  })

  describe('getE164', () => {
    it('should return E.164 format for valid number', () => {
      expect(getE164('2025551234', 'US')).toBe('+12025551234')
      expect(getE164('7911123456', 'GB')).toBe('+447911123456')
    })

    it('should return undefined for invalid number', () => {
      expect(getE164('123', 'US')).toBeUndefined()
    })
  })

  describe('getNationalFormat', () => {
    it('should return national format', () => {
      const result = getNationalFormat('2025551234', 'US')
      expect(result).toBe('(202) 555-1234')
    })

    it('should return digits for invalid number', () => {
      const result = getNationalFormat('12', 'US')
      expect(result).toBe('12')
    })
  })

  describe('getInternationalFormat', () => {
    it('should return international format', () => {
      const result = getInternationalFormat('2025551234', 'US')
      // libphonenumber-js uses spaces, not dashes
      expect(result).toContain('+1')
      expect(result).toContain('202')
    })
  })

  describe('detectCountry', () => {
    it('should detect country from E.164 number', () => {
      expect(detectCountry('+12025551234')).toBe('US')
    })

    it('should return undefined for unparseable number', () => {
      expect(detectCountry('123')).toBeUndefined()
    })
  })

  describe('isInternationalFormat', () => {
    it('should detect international format', () => {
      expect(isInternationalFormat('+12025551234')).toBe(true)
      expect(isInternationalFormat('002025551234')).toBe(true)
      expect(isInternationalFormat('2025551234')).toBe(false)
    })
  })
})
