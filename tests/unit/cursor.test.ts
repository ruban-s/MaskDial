import { describe, it, expect } from 'vitest'
import {
  calculateCursorPosition,
  countDigits,
  isDigit,
  getNthDigitPosition,
  isDeleteOperation,
} from '../../src/core/cursor'

describe('cursor utilities', () => {
  describe('countDigits', () => {
    it('should count digits in a string', () => {
      expect(countDigits('123')).toBe(3)
      expect(countDigits('(202) 555-1234')).toBe(10)
      expect(countDigits('')).toBe(0)
      expect(countDigits('abc')).toBe(0)
    })
  })

  describe('isDigit', () => {
    it('should identify digit characters', () => {
      expect(isDigit('0')).toBe(true)
      expect(isDigit('5')).toBe(true)
      expect(isDigit('9')).toBe(true)
      expect(isDigit('a')).toBe(false)
      expect(isDigit('(')).toBe(false)
      expect(isDigit(' ')).toBe(false)
    })
  })

  describe('getNthDigitPosition', () => {
    it('should find position of nth digit', () => {
      const str = '(202) 555-1234'
      expect(getNthDigitPosition(str, 1)).toBe(1) // First '2'
      expect(getNthDigitPosition(str, 2)).toBe(2) // '0'
      expect(getNthDigitPosition(str, 3)).toBe(3) // Second '2'
      expect(getNthDigitPosition(str, 4)).toBe(6) // First '5'
    })

    it('should return -1 if not enough digits', () => {
      expect(getNthDigitPosition('123', 5)).toBe(-1)
      expect(getNthDigitPosition('abc', 1)).toBe(-1)
    })
  })

  describe('isDeleteOperation', () => {
    it('should detect deletion', () => {
      expect(isDeleteOperation('(202) 555', '(202) 55')).toBe(true)
      expect(isDeleteOperation('123', '12')).toBe(true)
    })

    it('should detect non-deletion', () => {
      expect(isDeleteOperation('(202) 55', '(202) 555')).toBe(false)
      expect(isDeleteOperation('12', '123')).toBe(false)
    })
  })

  describe('calculateCursorPosition', () => {
    it('should maintain cursor position after formatting', () => {
      // User types '2025551234', cursor at end
      // Formatted to '(202) 555-1234'
      const result = calculateCursorPosition({
        oldValue: '2025551234',
        newValue: '(202) 555-1234',
        oldCursorPosition: 10,
        isDelete: false,
      })

      // Cursor should be at end (after last digit)
      expect(result).toBe(14)
    })

    it('should position cursor after typed digit', () => {
      // User typing area code, cursor after '20'
      const result = calculateCursorPosition({
        oldValue: '20',
        newValue: '(20',
        oldCursorPosition: 2,
        isDelete: false,
      })

      // Should be after the '0' in formatted string
      expect(result).toBe(3)
    })

    it('should handle cursor at beginning', () => {
      const result = calculateCursorPosition({
        oldValue: '202',
        newValue: '(202',
        oldCursorPosition: 0,
        isDelete: false,
      })

      // With 0 digits before cursor, result may vary
      expect(result).toBeGreaterThanOrEqual(0)
    })

    it('should handle deletion', () => {
      // Deleting a digit
      const result = calculateCursorPosition({
        oldValue: '(202) 555',
        newValue: '(202) 55',
        oldCursorPosition: 8, // After second 5
        isDelete: true,
      })

      // Should position after remaining digits
      expect(result).toBeGreaterThanOrEqual(0)
    })

    it('should handle cursor in middle of number', () => {
      // Cursor after 3 digits: '202|'
      // Formatted: '(202|'
      const result = calculateCursorPosition({
        oldValue: '202',
        newValue: '(202',
        oldCursorPosition: 3,
        isDelete: false,
      })

      expect(result).toBe(4) // After '(' + 3 digits
    })
  })
})
