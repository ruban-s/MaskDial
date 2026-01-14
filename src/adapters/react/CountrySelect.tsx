import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useId,
  forwardRef,
  useImperativeHandle,
} from 'react'
import type { CountryCode } from 'libphonenumber-js/min'
import {
  getCountryByIso,
  searchCountries,
  getSortedCountries,
  type Country,
} from '../../components/CountryData'

/**
 * Props for CountrySelect component
 */
export interface CountrySelectProps {
  /** Selected country code */
  value?: CountryCode
  /** Callback when country changes */
  onChange?: (country: CountryCode) => void
  /** Default country (uncontrolled mode) */
  defaultValue?: CountryCode
  /** Priority countries to show at top */
  priorityCountries?: CountryCode[]
  /** Placeholder text */
  placeholder?: string
  /** Disable the select */
  disabled?: boolean
  /** Show search input */
  searchable?: boolean
  /** Search placeholder */
  searchPlaceholder?: string
  /** Custom class name */
  className?: string
  /** Custom class name for dropdown */
  dropdownClassName?: string
  /** Custom class name for option */
  optionClassName?: string
  /** Show dial code in options */
  showDialCode?: boolean
  /** Show flag in options */
  showFlag?: boolean
  /** ARIA label */
  'aria-label'?: string
  /** Custom render for selected item */
  renderSelected?: (country: Country | undefined) => React.ReactNode
  /** Custom render for option */
  renderOption?: (country: Country, isSelected: boolean, isFocused: boolean) => React.ReactNode
  /** Dropdown position */
  dropdownPosition?: 'auto' | 'top' | 'bottom'
  /** ID for the component */
  id?: string
}

/**
 * Ref handle for CountrySelect
 */
export interface CountrySelectRef {
  /** Get the selected country */
  getValue: () => CountryCode | undefined
  /** Set the selected country */
  setValue: (country: CountryCode) => void
  /** Open the dropdown */
  open: () => void
  /** Close the dropdown */
  close: () => void
  /** Focus the component */
  focus: () => void
}

/**
 * Country selector component with flag icons and search
 *
 * @example
 * ```tsx
 * import { CountrySelect } from 'maskdial/react'
 *
 * function CountryForm() {
 *   const [country, setCountry] = useState<CountryCode>('US')
 *
 *   return (
 *     <CountrySelect
 *       value={country}
 *       onChange={setCountry}
 *       priorityCountries={['US', 'CA', 'GB']}
 *       searchable
 *     />
 *   )
 * }
 * ```
 */
export const CountrySelect = forwardRef<CountrySelectRef, CountrySelectProps>(
  function CountrySelect(
    {
      value: controlledValue,
      onChange,
      defaultValue,
      priorityCountries = [],
      placeholder = 'Select country',
      disabled = false,
      searchable = true,
      searchPlaceholder = 'Search countries...',
      className = '',
      dropdownClassName = '',
      optionClassName = '',
      showDialCode = true,
      showFlag = true,
      'aria-label': ariaLabel = 'Select country',
      renderSelected,
      renderOption,
      dropdownPosition = 'auto',
      id,
    },
    ref
  ) {
    const generatedId = useId()
    const componentId = id ?? `country-select-${generatedId}`
    const listboxId = `${componentId}-listbox`
    const searchId = `${componentId}-search`

    // State
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState<CountryCode | undefined>(defaultValue)
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [focusedIndex, setFocusedIndex] = useState(-1)

    // Refs
    const containerRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)

    // Current value
    const selectedValue = isControlled ? controlledValue : internalValue
    const selectedCountry = selectedValue ? getCountryByIso(selectedValue) : undefined

    // Filtered and sorted countries
    const displayCountries = searchQuery
      ? searchCountries(searchQuery)
      : getSortedCountries(priorityCountries)

    // Update value
    const updateValue = useCallback(
      (country: CountryCode) => {
        if (!isControlled) {
          setInternalValue(country)
        }
        onChange?.(country)
        setIsOpen(false)
        setSearchQuery('')
        setFocusedIndex(-1)
        buttonRef.current?.focus()
      },
      [isControlled, onChange]
    )

    // Open dropdown
    const openDropdown = useCallback(() => {
      if (!disabled) {
        setIsOpen(true)
        setFocusedIndex(
          selectedValue
            ? displayCountries.findIndex((c) => c.iso === selectedValue)
            : 0
        )
        // Focus search input when opened
        setTimeout(() => searchRef.current?.focus(), 0)
      }
    }, [disabled, displayCountries, selectedValue])

    // Close dropdown
    const closeDropdown = useCallback(() => {
      setIsOpen(false)
      setSearchQuery('')
      setFocusedIndex(-1)
    }, [])

    // Toggle dropdown
    const toggleDropdown = useCallback(() => {
      if (isOpen) {
        closeDropdown()
      } else {
        openDropdown()
      }
    }, [isOpen, openDropdown, closeDropdown])

    // Handle click outside
    useEffect(() => {
      if (!isOpen) {
        return
      }

      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          closeDropdown()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen, closeDropdown])

    // Scroll focused item into view
    useEffect(() => {
      if (isOpen && focusedIndex >= 0 && listRef.current) {
        const focusedItem = listRef.current.children[focusedIndex] as HTMLElement
        if (focusedItem) {
          focusedItem.scrollIntoView({ block: 'nearest' })
        }
      }
    }, [isOpen, focusedIndex])

    // Keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return

        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault()
            if (!isOpen) {
              openDropdown()
            } else if (focusedIndex >= 0 && displayCountries[focusedIndex]) {
              updateValue(displayCountries[focusedIndex].iso)
            }
            break

          case 'Escape':
            e.preventDefault()
            closeDropdown()
            buttonRef.current?.focus()
            break

          case 'ArrowDown':
            e.preventDefault()
            if (!isOpen) {
              openDropdown()
            } else {
              setFocusedIndex((prev) =>
                prev < displayCountries.length - 1 ? prev + 1 : prev
              )
            }
            break

          case 'ArrowUp':
            e.preventDefault()
            if (isOpen) {
              setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev))
            }
            break

          case 'Home':
            e.preventDefault()
            if (isOpen) {
              setFocusedIndex(0)
            }
            break

          case 'End':
            e.preventDefault()
            if (isOpen) {
              setFocusedIndex(displayCountries.length - 1)
            }
            break

          case 'Tab':
            if (isOpen) {
              closeDropdown()
            }
            break
        }
      },
      [disabled, isOpen, focusedIndex, displayCountries, openDropdown, closeDropdown, updateValue]
    )

    // Handle search input
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
      setFocusedIndex(0)
    }, [])

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
      getValue: () => selectedValue,
      setValue: updateValue,
      open: openDropdown,
      close: closeDropdown,
      focus: () => buttonRef.current?.focus(),
    }))

    // Default render for selected item
    const defaultRenderSelected = (country: Country | undefined) => {
      if (!country) {
        return <span className="maskdial-country-placeholder">{placeholder}</span>
      }
      return (
        <span className="maskdial-country-selected">
          {showFlag && <span className="maskdial-country-flag">{country.flag}</span>}
          <span className="maskdial-country-name">{country.name}</span>
          {showDialCode && (
            <span className="maskdial-country-dial">+{country.dialCode}</span>
          )}
        </span>
      )
    }

    // Default render for option
    const defaultRenderOption = (country: Country, isSelected: boolean, isFocused: boolean) => (
      <>
        {isFocused && <span className="maskdial-country-focus-indicator" aria-hidden="true">›</span>}
        {showFlag && <span className="maskdial-country-flag">{country.flag}</span>}
        <span className="maskdial-country-name">{country.name}</span>
        {showDialCode && (
          <span className="maskdial-country-dial">+{country.dialCode}</span>
        )}
        {isSelected && <span className="maskdial-country-check" aria-hidden="true">✓</span>}
      </>
    )

    return (
      <div
        ref={containerRef}
        className={`maskdial-country-select ${className}`}
        onKeyDown={handleKeyDown}
      >
        {/* Trigger button */}
        <button
          ref={buttonRef}
          type="button"
          id={componentId}
          className="maskdial-country-button"
          onClick={toggleDropdown}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
        >
          {renderSelected
            ? renderSelected(selectedCountry)
            : defaultRenderSelected(selectedCountry)}
          <span className="maskdial-country-arrow" aria-hidden="true">
            {isOpen ? '▲' : '▼'}
          </span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className={`maskdial-country-dropdown maskdial-country-dropdown-${dropdownPosition} ${dropdownClassName}`}
            role="presentation"
          >
            {/* Search input */}
            {searchable && (
              <div className="maskdial-country-search-wrapper">
                <input
                  ref={searchRef}
                  type="text"
                  id={searchId}
                  className="maskdial-country-search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={searchPlaceholder}
                  aria-label="Search countries"
                  autoComplete="off"
                />
              </div>
            )}

            {/* Options list */}
            <ul
              ref={listRef}
              id={listboxId}
              role="listbox"
              className="maskdial-country-list"
              aria-label="Countries"
              aria-activedescendant={
                focusedIndex >= 0 ? `${componentId}-option-${focusedIndex}` : undefined
              }
            >
              {displayCountries.length === 0 ? (
                <li className="maskdial-country-no-results" role="option" aria-disabled="true">
                  No countries found
                </li>
              ) : (
                displayCountries.map((country, index) => {
                  const isSelected = country.iso === selectedValue
                  const isFocused = index === focusedIndex

                  return (
                    <li
                      key={country.iso}
                      id={`${componentId}-option-${index}`}
                      role="option"
                      className={`maskdial-country-option ${optionClassName} ${
                        isSelected ? 'maskdial-country-option-selected' : ''
                      } ${isFocused ? 'maskdial-country-option-focused' : ''}`}
                      aria-selected={isSelected}
                      onClick={() => updateValue(country.iso)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      {renderOption
                        ? renderOption(country, isSelected, isFocused)
                        : defaultRenderOption(country, isSelected, isFocused)}
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
)

export default CountrySelect
