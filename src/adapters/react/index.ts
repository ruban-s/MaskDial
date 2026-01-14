// React adapter for MaskDial
// Provides React components and hooks for phone number formatting

export { useMaskDial, type UseMaskDialOptions, type UseMaskDialReturn } from './useMaskDial'

export {
  MaskDialInput,
  type MaskDialInputProps,
  type MaskDialInputRef,
} from './MaskDialInput'

export {
  CountrySelect,
  type CountrySelectProps,
  type CountrySelectRef,
} from './CountrySelect'

// Re-export useful types
export type { CountryCode } from 'libphonenumber-js/min'
export type { FormatData, MaskDialOptions, ValidationResult } from '../../core/types'
export type { Country } from '../../components/CountryData'

// Re-export country utilities for convenience
export {
  countries,
  getCountryByIso,
  getCountriesByDialCode,
  searchCountries,
  getSortedCountries,
} from '../../components/CountryData'
