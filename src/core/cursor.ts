import type { CursorInput } from './types'

/**
 * Calculate the new cursor position after formatting
 *
 * Algorithm:
 * 1. Count digits before cursor in old value
 * 2. Find position in new value with same digit count
 *
 * This ensures cursor stays "with" the digits the user typed,
 * even when formatting characters are inserted/removed.
 */
export function calculateCursorPosition(input: CursorInput): number {
  const { oldValue, newValue, oldCursorPosition, isDelete } = input

  // Count digits before cursor in old value
  const textBeforeCursor = oldValue.slice(0, oldCursorPosition)
  const digitsBeforeCursor = countDigits(textBeforeCursor)

  // If deleting and cursor was after a formatting character,
  // we may need to adjust
  if (isDelete && digitsBeforeCursor === 0) {
    return 0
  }

  // Find position in new value with same digit count
  let digitCount = 0
  for (let i = 0; i < newValue.length; i++) {
    if (isDigit(newValue[i])) {
      digitCount++
    }
    if (digitCount === digitsBeforeCursor) {
      // Position cursor after this digit
      return i + 1
    }
  }

  // If we have more digits before cursor than in new value,
  // position at end
  return newValue.length
}

/**
 * Count the number of digit characters in a string
 */
export function countDigits(str: string): number {
  let count = 0
  for (const char of str) {
    if (isDigit(char)) {
      count++
    }
  }
  return count
}

/**
 * Check if a character is a digit
 */
export function isDigit(char: string): boolean {
  return char >= '0' && char <= '9'
}

/**
 * Get the position of the nth digit in a string
 * Returns -1 if there aren't enough digits
 */
export function getNthDigitPosition(str: string, n: number): number {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) {
      count++
      if (count === n) {
        return i
      }
    }
  }
  return -1
}

/**
 * Determine if the input change was a deletion
 */
export function isDeleteOperation(oldValue: string, newValue: string): boolean {
  const oldDigits = countDigits(oldValue)
  const newDigits = countDigits(newValue)
  return newDigits < oldDigits
}
