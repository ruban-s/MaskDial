import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MaskDial, EVENTS } from '../../src/adapters/vanilla'

describe('MaskDial (Vanilla)', () => {
  let input: HTMLInputElement
  let maskDial: MaskDial

  beforeEach(() => {
    // Create input element
    input = document.createElement('input')
    input.type = 'text'
    document.body.appendChild(input)
  })

  afterEach(() => {
    maskDial?.destroy()
    input.remove()
  })

  describe('initialization', () => {
    it('should create instance with element', () => {
      maskDial = new MaskDial(input, { country: 'US' })

      expect(maskDial).toBeInstanceOf(MaskDial)
    })

    it('should create instance with selector', () => {
      input.id = 'test-input'
      maskDial = new MaskDial('#test-input', { country: 'US' })

      expect(maskDial).toBeInstanceOf(MaskDial)
    })

    it('should throw for invalid selector', () => {
      expect(() => new MaskDial('#nonexistent')).toThrow('Element not found')
    })

    it('should set input type to tel', () => {
      maskDial = new MaskDial(input)

      expect(input.getAttribute('type')).toBe('tel')
    })

    it('should format initial value', () => {
      input.value = '2025551234'
      maskDial = new MaskDial(input, { country: 'US' })

      expect(input.value).toBe('(202) 555-1234')
    })
  })

  describe('formatting', () => {
    beforeEach(() => {
      maskDial = new MaskDial(input, { country: 'US' })
    })

    it('should format on input', () => {
      input.value = '2025551234'
      input.dispatchEvent(new Event('input'))

      expect(input.value).toBe('(202) 555-1234')
    })

    it('should format progressively', () => {
      input.value = '202'
      input.dispatchEvent(new Event('input'))
      // libphonenumber-js includes closing paren
      expect(input.value).toContain('202')

      input.value = '2025'
      input.dispatchEvent(new Event('input'))
      expect(input.value).toContain('202')
      expect(input.value).toContain('5')
    })
  })

  describe('public API', () => {
    beforeEach(() => {
      input.value = '2025551234'
      maskDial = new MaskDial(input, { country: 'US' })
    })

    it('should return value', () => {
      expect(maskDial.getValue()).toBe('(202) 555-1234')
    })

    it('should return E.164', () => {
      expect(maskDial.getE164()).toBe('+12025551234')
    })

    it('should return national format', () => {
      expect(maskDial.getNational()).toBe('(202) 555-1234')
    })

    it('should return international format', () => {
      const intl = maskDial.getInternational()
      expect(intl).toContain('+1')
      expect(intl).toContain('202')
    })

    it('should return digits only', () => {
      expect(maskDial.getDigits()).toBe('2025551234')
    })

    it('should check validity', () => {
      expect(maskDial.isValid()).toBe(true)
    })

    it('should check possibility', () => {
      expect(maskDial.isPossible()).toBe(true)
    })

    it('should return country', () => {
      expect(maskDial.getCountry()).toBe('US')
    })

    it('should change country', () => {
      maskDial.setCountry('GB')
      expect(maskDial.getOptions().country).toBe('GB')
    })
  })

  describe('events', () => {
    it('should emit format event', () => {
      const handler = vi.fn()
      input.addEventListener(EVENTS.FORMAT, handler)

      maskDial = new MaskDial(input, { country: 'US' })
      input.value = '2025551234'
      input.dispatchEvent(new Event('input'))

      expect(handler).toHaveBeenCalled()
    })

    it('should emit validate event on validity change', () => {
      const handler = vi.fn()
      input.addEventListener(EVENTS.VALIDATE, handler)

      maskDial = new MaskDial(input, { country: 'US' })

      // Type partial number (invalid)
      input.value = '202'
      input.dispatchEvent(new Event('input'))

      // Type complete number (valid)
      input.value = '2025551234'
      input.dispatchEvent(new Event('input'))

      expect(handler).toHaveBeenCalled()
    })
  })

  describe('callbacks', () => {
    it('should call onFormat callback', () => {
      const onFormat = vi.fn()
      maskDial = new MaskDial(input, { country: 'US', onFormat })

      input.value = '202'
      input.dispatchEvent(new Event('input'))

      expect(onFormat).toHaveBeenCalled()
      const callArg = onFormat.mock.calls[0][0]
      expect(callArg.digits).toBe('202')
    })

    it('should call onValidate callback', () => {
      const onValidate = vi.fn()
      maskDial = new MaskDial(input, { country: 'US', onValidate })

      input.value = '2025551234'
      input.dispatchEvent(new Event('input'))

      expect(onValidate).toHaveBeenCalledWith(true, true)
    })
  })

  describe('destroy', () => {
    it('should remove event listeners', () => {
      maskDial = new MaskDial(input, { country: 'US' })
      maskDial.destroy()

      // After destroy, input should not format
      input.value = '2025551234'
      input.dispatchEvent(new Event('input'))

      expect(input.value).toBe('2025551234') // Unchanged
    })
  })
})
