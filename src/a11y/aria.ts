/**
 * WCAG 2.2 Accessibility Utilities for MaskDial
 *
 * These utilities help ensure phone input components are accessible
 * to users with disabilities, including screen reader users and
 * keyboard-only users.
 */

/**
 * ARIA attribute configuration for phone input
 */
export interface PhoneInputAriaConfig {
  /** Unique ID for the input */
  inputId: string
  /** Label text (visible or screen-reader only) */
  label?: string
  /** Error message when validation fails */
  errorMessage?: string
  /** Help text describing the expected format */
  helpText?: string
  /** Whether the field is required */
  required?: boolean
  /** Whether the current value is invalid */
  invalid?: boolean
  /** Additional description IDs */
  describedBy?: string[]
}

/**
 * Generate ARIA attributes for a phone input element
 *
 * @example
 * ```tsx
 * const ariaAttrs = getPhoneInputAria({
 *   inputId: 'phone-input',
 *   label: 'Phone number',
 *   required: true,
 *   invalid: !isValid,
 *   errorMessage: 'Please enter a valid phone number',
 *   helpText: 'Format: (555) 555-5555'
 * })
 *
 * <input {...ariaAttrs.input} />
 * <span {...ariaAttrs.label}>Phone number</span>
 * <span {...ariaAttrs.error}>Please enter a valid phone number</span>
 * <span {...ariaAttrs.help}>Format: (555) 555-5555</span>
 * ```
 */
export function getPhoneInputAria(config: PhoneInputAriaConfig) {
  const { inputId, label, errorMessage, helpText, required = false, invalid = false, describedBy = [] } = config

  const errorId = `${inputId}-error`
  const helpId = `${inputId}-help`
  const labelId = `${inputId}-label`

  // Build describedby list
  const describedByIds = [...describedBy]
  if (helpText) describedByIds.push(helpId)
  if (invalid && errorMessage) describedByIds.push(errorId)

  return {
    input: {
      id: inputId,
      type: 'tel' as const,
      inputMode: 'tel' as const,
      autoComplete: 'tel' as const,
      'aria-labelledby': label ? labelId : undefined,
      'aria-required': required || undefined,
      'aria-invalid': invalid || undefined,
      'aria-describedby': describedByIds.length > 0 ? describedByIds.join(' ') : undefined,
    },
    label: {
      id: labelId,
    },
    error: {
      id: errorId,
      role: 'alert' as const,
      'aria-live': 'polite' as const,
    },
    help: {
      id: helpId,
    },
  }
}

/**
 * ARIA attribute configuration for country select
 */
export interface CountrySelectAriaConfig {
  /** Unique ID for the select */
  selectId: string
  /** Label text */
  label?: string
  /** Whether the dropdown is expanded */
  expanded?: boolean
  /** Currently focused option index */
  focusedIndex?: number
  /** Total number of options */
  optionCount?: number
  /** Whether the field is required */
  required?: boolean
}

/**
 * Generate ARIA attributes for a country select element
 *
 * @example
 * ```tsx
 * const ariaAttrs = getCountrySelectAria({
 *   selectId: 'country-select',
 *   label: 'Select country',
 *   expanded: isOpen,
 *   focusedIndex: 5,
 *   optionCount: 200
 * })
 *
 * <button {...ariaAttrs.button}>
 *   🇺🇸 United States
 * </button>
 * <ul {...ariaAttrs.listbox}>
 *   {countries.map((country, i) => (
 *     <li {...ariaAttrs.option(i, i === selectedIndex)}>
 *       {country.flag} {country.name}
 *     </li>
 *   ))}
 * </ul>
 * ```
 */
export function getCountrySelectAria(config: CountrySelectAriaConfig) {
  const { selectId, label, expanded = false, focusedIndex = -1, required = false } = config

  const listboxId = `${selectId}-listbox`
  const labelId = `${selectId}-label`

  return {
    button: {
      id: selectId,
      role: 'combobox' as const,
      'aria-haspopup': 'listbox' as const,
      'aria-expanded': expanded,
      'aria-controls': listboxId,
      'aria-labelledby': label ? labelId : undefined,
      'aria-required': required || undefined,
      'aria-activedescendant':
        expanded && focusedIndex >= 0 ? `${selectId}-option-${focusedIndex}` : undefined,
    },
    listbox: {
      id: listboxId,
      role: 'listbox' as const,
      'aria-label': label ?? 'Countries',
    },
    option: (index: number, selected: boolean) => ({
      id: `${selectId}-option-${index}`,
      role: 'option' as const,
      'aria-selected': selected,
    }),
    label: {
      id: labelId,
    },
  }
}

/**
 * Live region element for screen reader announcements
 */
let liveRegion: HTMLElement | null = null

/**
 * Create or get the live region element for announcements
 */
function getLiveRegion(): HTMLElement {
  if (liveRegion) return liveRegion

  // Check if one already exists
  liveRegion = document.getElementById('maskdial-live-region')
  if (liveRegion) return liveRegion

  // Create new live region
  liveRegion = document.createElement('div')
  liveRegion.id = 'maskdial-live-region'
  liveRegion.setAttribute('role', 'status')
  liveRegion.setAttribute('aria-live', 'polite')
  liveRegion.setAttribute('aria-atomic', 'true')
  liveRegion.className = 'sr-only'
  // Visually hidden but accessible to screen readers
  liveRegion.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `
  document.body.appendChild(liveRegion)
  return liveRegion
}

/**
 * Announce a message to screen readers
 *
 * @example
 * ```ts
 * // Announce validation result
 * announce('Phone number is valid')
 *
 * // Announce with urgency
 * announce('Error: Phone number is invalid', 'assertive')
 * ```
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const region = getLiveRegion()

  // Update priority if needed
  region.setAttribute('aria-live', priority)

  // Clear and set the message (allows repeated announcements of same text)
  region.textContent = ''

  // Use requestAnimationFrame to ensure the empty state is processed
  requestAnimationFrame(() => {
    region.textContent = message
  })
}

/**
 * Phone validation status messages for screen readers
 */
export const validationMessages = {
  valid: 'Phone number is valid',
  invalid: 'Phone number is invalid',
  tooShort: 'Phone number is too short',
  tooLong: 'Phone number is too long',
  possible: 'Phone number format looks correct',
  empty: 'Phone number is empty',
  countryChanged: (country: string) => `Country changed to ${country}`,
  formatChanged: (format: string) => `Formatted as ${format}`,
} as const

/**
 * Announce phone validation status
 */
export function announceValidation(
  isValid: boolean,
  isPossible: boolean,
  _formatted?: string
): void {
  if (isValid) {
    announce(validationMessages.valid)
  } else if (isPossible) {
    announce(validationMessages.possible)
  } else {
    announce(validationMessages.invalid)
  }
}

/**
 * Announce country selection change
 */
export function announceCountryChange(countryName: string): void {
  announce(validationMessages.countryChanged(countryName))
}

/**
 * Keyboard navigation keys for reference
 */
export const keyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
} as const

/**
 * Check if a keyboard event is a navigation key
 */
export function isNavigationKey(key: string): boolean {
  return ([
    keyboardKeys.ARROW_UP,
    keyboardKeys.ARROW_DOWN,
    keyboardKeys.ARROW_LEFT,
    keyboardKeys.ARROW_RIGHT,
    keyboardKeys.HOME,
    keyboardKeys.END,
    keyboardKeys.PAGE_UP,
    keyboardKeys.PAGE_DOWN,
  ] as string[]).includes(key)
}

/**
 * Check if a keyboard event is an action key
 */
export function isActionKey(key: string): boolean {
  return ([keyboardKeys.ENTER, keyboardKeys.SPACE] as string[]).includes(key)
}

/**
 * Focus trap utility for modal/dropdown elements
 *
 * @example
 * ```ts
 * const trap = createFocusTrap(dropdownElement)
 * trap.activate()
 * // ... user interacts with dropdown
 * trap.deactivate()
 * ```
 */
export function createFocusTrap(container: HTMLElement) {
  let previousActiveElement: Element | null = null

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  const getFocusableElements = () =>
    Array.from(container.querySelectorAll<HTMLElement>(focusableSelector))

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    const focusable = getFocusableElements()
    if (focusable.length === 0) return

    const firstElement = focusable[0]
    const lastElement = focusable[focusable.length - 1]

    if (e.shiftKey) {
      // Shift + Tab: go to last element if on first
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      // Tab: go to first element if on last
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  return {
    activate() {
      previousActiveElement = document.activeElement
      container.addEventListener('keydown', handleKeyDown)

      // Focus first focusable element
      const focusable = getFocusableElements()
      if (focusable.length > 0) {
        focusable[0].focus()
      }
    },

    deactivate() {
      container.removeEventListener('keydown', handleKeyDown)

      // Restore focus
      if (previousActiveElement && previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus()
      }
    },
  }
}

/**
 * CSS for visually hiding elements while keeping them accessible
 */
export const srOnlyStyles = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

/**
 * Inject screen-reader-only CSS class into document
 */
export function injectSrOnlyStyles(): void {
  if (document.getElementById('maskdial-a11y-styles')) return

  const style = document.createElement('style')
  style.id = 'maskdial-a11y-styles'
  style.textContent = `.sr-only { ${srOnlyStyles} }`
  document.head.appendChild(style)
}
