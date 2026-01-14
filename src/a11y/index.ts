// WCAG 2.2 Accessibility utilities for MaskDial

export {
  // ARIA attribute generators
  getPhoneInputAria,
  getCountrySelectAria,
  type PhoneInputAriaConfig,
  type CountrySelectAriaConfig,

  // Screen reader announcements
  announce,
  announceValidation,
  announceCountryChange,
  validationMessages,

  // Keyboard navigation
  keyboardKeys,
  isNavigationKey,
  isActionKey,

  // Focus management
  createFocusTrap,

  // CSS utilities
  srOnlyStyles,
  injectSrOnlyStyles,
} from './aria'
