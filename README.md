# MaskDial

Modern phone number formatting library with React/Vue components, TypeScript support, Zod/Yup validators, and full WCAG 2.2 accessibility.

![version](https://img.shields.io/npm/v/maskdial)
![license](https://img.shields.io/npm/l/maskdial)
![bundle size](https://img.shields.io/bundlephobia/minzip/maskdial)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)
![react](https://img.shields.io/badge/React-18+-61DAFB)
![vue](https://img.shields.io/badge/Vue-3+-4FC08D)
![accessibility](https://img.shields.io/badge/WCAG-2.2-green)

## Why MaskDial?

| Feature | libphonenumber-js | intl-tel-input | **MaskDial** |
|---------|:-----------------:|:--------------:|:------------:|
| Phone Formatting | ✓ | ✓ | ✓ |
| Validation | ✓ | ✓ | ✓ |
| React Component | ✗ | ✗ | **✓** |
| Vue 3 Composable | ✗ | ✗ | **✓** |
| Country Selector | ✗ | ✓ | **✓** |
| Flag Icons | ✗ | ✓ (images) | **✓ (emoji)** |
| Zod/Yup Validators | ✗ | ✗ | **✓** |
| Full TypeScript | ✓ | Partial | **✓** |
| WCAG 2.2 A11y | ✗ | Partial | **✓** |
| jQuery Support | ✗ | ✓ | **✓** |
| Bundle Size | ~80KB | ~200KB+ | **~90KB** |
| External Images | ✗ | Required | **None** |

## Features

- **Framework Components** - React hooks/components and Vue 3 composables
- **Country Selector** - Searchable dropdown with 200+ countries and flag emojis
- **Form Validation** - Zod and Yup schemas for easy form integration
- **TypeScript First** - Full type definitions and IntelliSense support
- **Accessible** - WCAG 2.2 compliant with ARIA, keyboard navigation, screen reader support
- **Powered by libphonenumber-js** - Accurate formatting for 200+ countries
- **Smart Cursor** - Maintains cursor position during formatting
- **Multiple Adapters** - Vanilla JS, jQuery, React, Vue from single package

## Installation

```bash
npm install maskdial
```

### Framework-Specific Installation

```bash
# React
npm install maskdial react react-dom

# Vue 3
npm install maskdial vue

# With Zod validation
npm install maskdial zod

# With Yup validation
npm install maskdial yup
```

### CDN

```html
<script src="https://unpkg.com/maskdial/dist/maskdial.umd.js"></script>
```

---

## Quick Start

### React

```tsx
import { MaskDialInput, CountrySelect } from 'maskdial/react'

function PhoneForm() {
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('US')

  return (
    <div>
      <CountrySelect
        value={country}
        onChange={setCountry}
        priorityCountries={['US', 'CA', 'GB']}
        searchable
      />
      <MaskDialInput
        value={phone}
        onChange={(value, data) => {
          setPhone(value)
          console.log('E.164:', data?.e164)
        }}
        country={country}
        showValidation
      />
    </div>
  )
}
```

### Vue 3

```vue
<script setup>
import { ref } from 'vue'
import { useMaskDial } from 'maskdial/vue'

const { value, isValid, e164, onInput, inputRef } = useMaskDial({
  country: 'US'
})
</script>

<template>
  <input
    ref="inputRef"
    :value="value"
    @input="onInput"
    type="tel"
  />
  <p v-if="isValid">Valid: {{ e164 }}</p>
</template>
```

### Vanilla JavaScript

```javascript
import { MaskDial } from 'maskdial'

const mask = new MaskDial('#phone', {
  country: 'US',
  onFormat: (data) => console.log('E.164:', data.e164)
})
```

### jQuery

```javascript
import 'maskdial/jquery'

$('#phone').maskDial({
  country: 'US',
  onFormat: (data) => console.log('E.164:', data.formatted)
})
```

---

## React API

### useMaskDial Hook

```tsx
import { useMaskDial } from 'maskdial/react'

function PhoneInput() {
  const {
    value,           // Current formatted value
    setValue,        // Set raw value (will be formatted)
    country,         // Current country code
    setCountry,      // Change country
    isValid,         // Is number valid?
    isPossible,      // Is number possible?
    e164,            // E.164 format (+12025551234)
    national,        // National format (202) 555-1234
    international,   // International format
    digits,          // Digits only
    inputProps,      // Spread on <input>
    inputRef,        // Attach to input for cursor management
    reset            // Reset to initial state
  } = useMaskDial({
    country: 'US',
    initialValue: '',
    onValueChange: (data) => console.log(data),
    onValidationChange: (isValid, isPossible) => console.log(isValid)
  })

  return <input {...inputProps} ref={inputRef} />
}
```

### MaskDialInput Component

```tsx
import { MaskDialInput, type MaskDialInputRef } from 'maskdial/react'

// Controlled
<MaskDialInput
  value={phone}
  onChange={(value, data) => setPhone(value)}
  country="US"
  showValidation
  validClassName="border-green-500"
  invalidClassName="border-red-500"
/>

// Uncontrolled with ref
const ref = useRef<MaskDialInputRef>(null)
<MaskDialInput ref={ref} country="US" />

// Access via ref
ref.current?.getE164()    // "+12025551234"
ref.current?.isValid()    // true
ref.current?.focus()
```

### CountrySelect Component

```tsx
import { CountrySelect } from 'maskdial/react'

<CountrySelect
  value={country}
  onChange={setCountry}
  priorityCountries={['US', 'CA', 'GB', 'AU']}
  searchable
  showDialCode
  showFlag
  placeholder="Select country"
  searchPlaceholder="Search..."
/>
```

---

## Vue 3 API

### useMaskDial Composable

```vue
<script setup>
import { useMaskDial } from 'maskdial/vue'

const {
  value,           // Ref<string> - formatted value
  country,         // Ref<CountryCode> - current country
  setCountry,      // (country: CountryCode) => void
  isValid,         // Ref<boolean>
  isPossible,      // Ref<boolean>
  e164,            // ComputedRef<string | undefined>
  national,        // ComputedRef<string>
  international,   // ComputedRef<string>
  digits,          // ComputedRef<string>
  onInput,         // Event handler
  inputRef,        // Template ref
  vModel,          // { value, onInput } for v-bind
  reset            // () => void
} = useMaskDial({
  country: 'US',
  modelValue: phone // Optional v-model binding
})
</script>

<template>
  <!-- Option 1: Manual binding -->
  <input
    ref="inputRef"
    :value="value"
    @input="onInput"
    type="tel"
  />

  <!-- Option 2: v-bind shorthand -->
  <input ref="inputRef" v-bind="vModel" type="tel" />
</template>
```

---

## Form Validation

### Zod

```typescript
import { z } from 'zod'
import { phoneNumber, phoneNumberTransform, optionalPhoneNumber } from 'maskdial/zod'

// Basic validation
const schema = z.object({
  phone: phoneNumber({ country: 'US' })
})

// With transformation to E.164
const schemaE164 = z.object({
  phone: phoneNumberTransform({ country: 'US', format: 'e164' })
})
// Input: "(202) 555-1234" → Output: "+12025551234"

// Optional phone
const schemaOptional = z.object({
  phone: optionalPhoneNumber({ country: 'US' })
})

// Custom error message
const schemaCustom = z.object({
  phone: phoneNumber({
    country: 'US',
    message: 'Please enter a valid US phone number',
    strict: true  // Require valid, not just possible
  })
})

// Refinement for existing schemas
import { isValidPhone } from 'maskdial/zod'

const customSchema = z.object({
  phone: z.string().refine(isValidPhone('US'), {
    message: 'Invalid phone'
  })
})
```

### Yup

```typescript
import * as yup from 'yup'
import { yupPhone, yupPhoneE164 } from 'maskdial/yup'

// Basic validation
const schema = yup.object({
  phone: yupPhone({ country: 'US' }).required('Phone is required')
})

// With E.164 transformation
const schemaE164 = yup.object({
  phone: yupPhoneE164('US').required()
})

// Using method extension
import 'maskdial/yup'

const schemaMethod = yup.object({
  phone: yup.string().phone({ country: 'US' }).required()
})

// With transformation
const schemaTransform = yup.object({
  phone: yup.string()
    .phone({ country: 'US' })
    .phoneTransform('e164', 'US')
    .required()
})
```

---

## Vanilla JavaScript API

```javascript
import { MaskDial, EVENTS } from 'maskdial'

const mask = new MaskDial('#phone', {
  country: 'US',
  autoDetectCountry: true,
  formatAsYouType: true,
  onFormat: (data) => {
    console.log('Formatted:', data.formatted)
    console.log('E.164:', data.e164)
    console.log('Valid:', data.isValid)
  },
  onValidate: (isValid, isPossible) => {
    console.log('Valid:', isValid, 'Possible:', isPossible)
  },
  onCountryChange: (country) => {
    console.log('Country detected:', country)
  }
})

// Methods
mask.getValue()           // "(202) 555-1234"
mask.getE164()            // "+12025551234"
mask.getNational()        // "(202) 555-1234"
mask.getInternational()   // "+1 202 555 1234"
mask.getDigits()          // "2025551234"
mask.isValid()            // true
mask.isPossible()         // true
mask.getCountry()         // "US"
mask.setCountry('GB')     // Change country
mask.destroy()            // Cleanup

// Events
input.addEventListener(EVENTS.FORMAT, (e) => {
  console.log(e.detail)  // FormatData
})
input.addEventListener(EVENTS.VALIDATE, (e) => {
  console.log(e.detail.isValid)
})
```

---

## jQuery API

```javascript
import 'maskdial/jquery'

$('#phone').maskDial({
  country: 'US',
  onFormat: (data) => console.log(data.e164)
})

// Methods
$('#phone').maskDial('getValue')
$('#phone').maskDial('getE164')
$('#phone').maskDial('isValid')
$('#phone').maskDial('setCountry', 'GB')
$('#phone').maskDial('destroy')

// Events
$('#phone').on('maskdial:format', (e, data) => {
  console.log(data.formatted)
})
$('#phone').on('maskdial:validate', (e, isValid, isPossible) => {
  console.log('Valid:', isValid)
})
```

---

## Country Data

```typescript
import {
  countries,
  getCountryByIso,
  getCountriesByDialCode,
  searchCountries,
  getSortedCountries
} from 'maskdial/countries'

// Get all countries
countries // Country[]

// Find by ISO code
getCountryByIso('US')
// { name: 'United States', iso: 'US', dialCode: '1', flag: '🇺🇸' }

// Find by dial code (returns array - some codes are shared)
getCountriesByDialCode('1')
// [{ name: 'United States', ... }, { name: 'Canada', ... }, ...]

// Search
searchCountries('united')
// [{ name: 'United States', ... }, { name: 'United Kingdom', ... }, ...]

// Get sorted with priority countries first
getSortedCountries(['US', 'CA', 'GB'])
// [US, CA, GB, Afghanistan, Albania, ...]
```

---

## Accessibility

MaskDial is WCAG 2.2 compliant with:

- **ARIA attributes** - Proper labeling and descriptions
- **Keyboard navigation** - Full arrow key, home/end, escape support
- **Screen reader support** - Live region announcements
- **Focus management** - Focus trap in dropdowns

### A11y Utilities

```typescript
import {
  getPhoneInputAria,
  getCountrySelectAria,
  announce,
  createFocusTrap
} from 'maskdial/a11y'

// Generate ARIA attributes for phone input
const aria = getPhoneInputAria({
  inputId: 'phone',
  label: 'Phone number',
  required: true,
  invalid: !isValid,
  errorMessage: 'Invalid phone number',
  helpText: 'Format: (555) 555-5555'
})

<input {...aria.input} />
<span {...aria.label}>Phone number</span>
<span {...aria.error}>Invalid phone number</span>
<span {...aria.help}>Format: (555) 555-5555</span>

// Screen reader announcements
announce('Phone number is valid')
announce('Error: Invalid phone number', 'assertive')

// Focus trap for dropdowns
const trap = createFocusTrap(dropdownElement)
trap.activate()   // Trap focus
trap.deactivate() // Release focus
```

---

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `country` | `CountryCode` | `undefined` | ISO 3166-1 alpha-2 country code |
| `autoDetectCountry` | `boolean` | `false` | Auto-detect country from input |
| `formatAsYouType` | `boolean` | `true` | Format during typing |
| `onFormat` | `function` | `undefined` | Callback after formatting |
| `onValidate` | `function` | `undefined` | Callback on validation change |
| `onCountryChange` | `function` | `undefined` | Callback on country change |

### FormatData Object

```typescript
interface FormatData {
  formatted: string           // Display value
  e164: string | undefined    // +12025551234
  national: string            // (202) 555-1234
  international: string       // +1 202 555 1234
  digits: string              // 2025551234
  country: CountryCode | undefined
  countryCallingCode: string | undefined
  isValid: boolean
  isPossible: boolean
  template: string | undefined
}
```

---

## Browser Support

Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions)

---

## Migration from v1

### Breaking Changes

- jQuery no longer bundled - import `maskdial/jquery` separately
- Plugin renamed: `maskedFormat` → `maskDial`
- Options: `iso` → `country`, `phoneCode` removed (auto-detected)

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
  country: 'US'
})
```

---

## Development

```bash
npm install        # Install dependencies
npm run dev        # Watch mode
npm test           # Run tests
npm run build      # Production build
npm run lint       # Lint code
npm run typecheck  # Type check
```

---

## License

MIT
