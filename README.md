# MaskDial

Modern phone number formatting library with TypeScript support. Available as both vanilla JavaScript and jQuery plugin.

![version](https://img.shields.io/npm/v/maskdial)
![license](https://img.shields.io/npm/l/maskdial)
![bundle size](https://img.shields.io/bundlephobia/minzip/maskdial)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

## Features

- **TypeScript Support** - Full type definitions included
- **Dual Versions** - Vanilla JS and jQuery plugin from single package
- **Powered by libphonenumber-js** - Accurate formatting for 200+ countries
- **E.164 & National Formats** - Get phone numbers in any format
- **Validation** - Built-in phone number validation
- **Smart Cursor** - Cursor position maintained during formatting
- **Lightweight** - ~80KB with libphonenumber-js/min

## Installation

```bash
npm install maskdial
```

### CDN

```html
<!-- UMD bundle (includes libphonenumber-js) -->
<script src="https://unpkg.com/maskdial/dist/maskdial.umd.js"></script>
```

## Usage

### Vanilla JavaScript

```javascript
import { MaskDial } from 'maskdial'

const mask = new MaskDial('#phone', {
  country: 'US',
  onFormat: (data) => {
    console.log('Formatted:', data.formatted)
    console.log('E.164:', data.e164)
    console.log('Valid:', data.isValid)
  }
})

// Get values
mask.getValue()        // "(202) 555-1234"
mask.getE164()         // "+12025551234"
mask.getNational()     // "(202) 555-1234"
mask.getInternational() // "+1 202-555-1234"
mask.getDigits()       // "2025551234"

// Validation
mask.isValid()         // true
mask.isPossible()      // true

// Country
mask.getCountry()      // "US"
mask.setCountry('GB')  // Change country

// Cleanup
mask.destroy()
```

### jQuery Plugin

```javascript
import 'maskdial/jquery'

$('#phone').maskDial({
  country: 'US',
  onFormat: function(data) {
    console.log('Formatted:', data.formatted)
  }
})

// Get instance
const instance = $('#phone').maskDial('instance')

// Methods
$('#phone').maskDial('getValue')     // "(202) 555-1234"
$('#phone').maskDial('getE164')      // "+12025551234"
$('#phone').maskDial('isValid')      // true
$('#phone').maskDial('setCountry', 'GB')
$('#phone').maskDial('destroy')

// Events
$('#phone').on('maskdial:format', function(e, data) {
  console.log(data.formatted)
})

$('#phone').on('maskdial:validate', function(e, isValid, isPossible) {
  console.log('Valid:', isValid)
})

$('#phone').on('maskdial:countrychange', function(e, country) {
  console.log('Country:', country)
})
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `country` | `string` | `undefined` | ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB') |
| `defaultCountry` | `string` | `undefined` | Fallback country when auto-detection fails |
| `international` | `boolean` | `false` | Show international format with country code |
| `onFormat` | `function` | `undefined` | Callback after each format operation |
| `onValidate` | `function` | `undefined` | Callback when validation state changes |
| `onCountryChange` | `function` | `undefined` | Callback when detected country changes |

## Format Data

The `onFormat` callback receives a data object:

```typescript
interface FormatData {
  formatted: string        // Display value
  e164: string | undefined // E.164 format (+12025551234)
  national: string         // National format (202) 555-1234
  digits: string           // Raw digits only
  country: string | undefined
  countryCallingCode: string | undefined
  isValid: boolean
  isPossible: boolean
  template: string | undefined
}
```

## Utility Functions

Import standalone utilities for custom use:

```javascript
import {
  validatePhoneNumber,
  getE164,
  getNationalFormat,
  getInternationalFormat,
  detectCountry,
  PhoneFormatter
} from 'maskdial'

// Validate
const result = validatePhoneNumber('2025551234', 'US')
console.log(result.isValid) // true

// Format
const e164 = getE164('2025551234', 'US') // "+12025551234"

// Detect country
const country = detectCountry('+442071234567') // "GB"
```

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)

## Migration from v1

### Breaking Changes

- jQuery is no longer bundled - import separately
- New option names: `iso` → `country`, `phoneCode` removed (auto-detected)
- Plugin renamed: `maskedFormat` → `maskDial`

### Before (v1)

```javascript
$('#phone').maskedFormat({
  iso: 'US',
  phoneCode: '+1',
  prependCode: true
})
```

### After (v2)

```javascript
import 'maskdial/jquery'

$('#phone').maskDial({
  country: 'US',
  international: true
})
```

## Development

```bash
# Install dependencies
npm install

# Development with watch
npm run dev

# Run tests
npm test

# Build
npm run build

# Lint
npm run lint
```

## License

MIT
