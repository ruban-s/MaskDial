// Vue 3 adapter for MaskDial
// Provides Vue composable for phone number formatting

export { useMaskDial, type UseMaskDialOptions, type UseMaskDialReturn } from './useMaskDial'

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
