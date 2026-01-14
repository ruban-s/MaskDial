// Zod validator exports
export {
  phoneNumber,
  phoneNumberTransform,
  optionalPhoneNumber,
  isValidPhone as zodIsValidPhone,
  createCountryPhoneSchema,
  phoneNumber as default,
} from './zod'

// Yup validator exports
export {
  yupPhone,
  yupPhoneForCountry,
  yupPhoneE164,
  isValidPhoneTest as yupIsValidPhoneTest,
  yup,
  yupPhone as defaultYup,
} from './yup'

// Note: PhoneNumberOptions and PhoneOutputFormat types are identical between
// validators and should be imported directly from './zod' or './yup' as needed
