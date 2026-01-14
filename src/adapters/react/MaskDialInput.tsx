import React, { forwardRef, useImperativeHandle, useId } from 'react'
import type { CountryCode } from 'libphonenumber-js/min'
import { useMaskDial, type UseMaskDialOptions } from './useMaskDial'
import type { FormatData } from '../../core/types'

/**
 * Props for MaskDialInput component
 */
export interface MaskDialInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'> {
  /** Current phone value (controlled mode) */
  value?: string
  /** Callback when value changes */
  onChange?: (value: string, data: FormatData | null) => void
  /** Default value (uncontrolled mode) */
  defaultValue?: string
  /** Country code for formatting */
  country?: CountryCode
  /** Callback when country changes (from auto-detection) */
  onCountryChange?: (country: CountryCode | undefined) => void
  /** Callback when validation changes */
  onValidationChange?: (isValid: boolean, isPossible: boolean) => void
  /** Show validation state visually */
  showValidation?: boolean
  /** CSS class for valid state */
  validClassName?: string
  /** CSS class for invalid state */
  invalidClassName?: string
  /** ARIA label for accessibility */
  'aria-label'?: string
  /** ARIA describedby for accessibility */
  'aria-describedby'?: string
}

/**
 * Ref handle for MaskDialInput
 */
export interface MaskDialInputRef {
  /** Get the current formatted value */
  getValue: () => string
  /** Set the value */
  setValue: (value: string) => void
  /** Get E.164 formatted number */
  getE164: () => string | undefined
  /** Get national formatted number */
  getNational: () => string
  /** Get international formatted number */
  getInternational: () => string
  /** Get digits only */
  getDigits: () => string
  /** Check if number is valid */
  isValid: () => boolean
  /** Check if number is possible */
  isPossible: () => boolean
  /** Get current country */
  getCountry: () => CountryCode | undefined
  /** Set country */
  setCountry: (country: CountryCode) => void
  /** Focus the input */
  focus: () => void
  /** Reset to default state */
  reset: () => void
}

/**
 * Phone number input component with formatting and validation
 *
 * @example
 * ```tsx
 * // Controlled mode
 * import { MaskDialInput } from 'maskdial/react'
 *
 * function PhoneForm() {
 *   const [phone, setPhone] = useState('')
 *
 *   return (
 *     <MaskDialInput
 *       value={phone}
 *       onChange={(value, data) => {
 *         setPhone(value)
 *         console.log('E.164:', data?.e164)
 *       }}
 *       country="US"
 *       placeholder="(555) 555-5555"
 *     />
 *   )
 * }
 *
 * // Uncontrolled mode with ref
 * function UncontrolledForm() {
 *   const inputRef = useRef<MaskDialInputRef>(null)
 *
 *   const handleSubmit = () => {
 *     const e164 = inputRef.current?.getE164()
 *     console.log('Submit:', e164)
 *   }
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <MaskDialInput ref={inputRef} country="US" />
 *       <button type="submit">Submit</button>
 *     </form>
 *   )
 * }
 * ```
 */
export const MaskDialInput = forwardRef<MaskDialInputRef, MaskDialInputProps>(
  function MaskDialInput(
    {
      value: controlledValue,
      onChange,
      defaultValue = '',
      country,
      onCountryChange,
      onValidationChange,
      showValidation = false,
      validClassName = 'maskdial-valid',
      invalidClassName = 'maskdial-invalid',
      className = '',
      disabled,
      readOnly,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      id,
      ...restProps
    },
    ref
  ) {
    const generatedId = useId()
    const inputId = id ?? `maskdial-${generatedId}`

    const isControlled = controlledValue !== undefined

    const hookOptions: UseMaskDialOptions = {
      initialValue: isControlled ? controlledValue : defaultValue,
      country,
      onValueChange: (data) => {
        onChange?.(data.formatted, data)
        if (data.country && data.country !== country) {
          onCountryChange?.(data.country)
        }
      },
      onValidationChange,
    }

    const {
      value: hookValue,
      setValue,
      isValid,
      isPossible,
      e164,
      national,
      international,
      digits,
      country: currentCountry,
      setCountry,
      inputProps,
      inputRef,
      reset,
    } = useMaskDial(hookOptions)

    // Use controlled value if provided
    const displayValue = isControlled ? controlledValue : hookValue

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
      getValue: () => displayValue,
      setValue,
      getE164: () => e164,
      getNational: () => national,
      getInternational: () => international,
      getDigits: () => digits,
      isValid: () => isValid,
      isPossible: () => isPossible,
      getCountry: () => currentCountry,
      setCountry,
      focus: () => inputRef.current?.focus(),
      reset,
    }))

    // Build className
    const computedClassName = [
      'maskdial-input',
      className,
      showValidation && digits.length > 0 && (isValid ? validClassName : invalidClassName),
    ]
      .filter(Boolean)
      .join(' ')

    // Handle controlled input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isControlled) {
        // In controlled mode, let parent handle the value
        // We still format it through the hook
        inputProps.onChange(e)
      } else {
        inputProps.onChange(e)
      }
    }

    return (
      <input
        {...restProps}
        {...inputProps}
        ref={inputRef}
        id={inputId}
        value={displayValue}
        onChange={handleChange}
        className={computedClassName}
        disabled={disabled}
        readOnly={readOnly}
        aria-label={ariaLabel ?? 'Phone number'}
        aria-describedby={ariaDescribedBy}
        aria-invalid={showValidation && digits.length > 0 ? !isValid : undefined}
      />
    )
  }
)

export default MaskDialInput
