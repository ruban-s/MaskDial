import type { CountryCode } from 'libphonenumber-js/min'
import { flagSvgPaths } from './flagPaths'
import { getCountryByIso } from '../CountryData'

export interface FlagSvgProps {
  /** Country ISO code */
  country: CountryCode
  /** Width in pixels */
  width?: number
  /** Height in pixels */
  height?: number
  /** Custom class name */
  className?: string
  /** Fallback to emoji if SVG not available */
  fallbackToEmoji?: boolean
}

/**
 * SVG Flag component for countries
 *
 * @example
 * ```tsx
 * import { FlagSvg } from 'maskdial/flags'
 *
 * <FlagSvg country="US" width={24} height={18} />
 * <FlagSvg country="GB" width={32} />
 * ```
 */
export function FlagSvg({
  country,
  width = 24,
  height,
  className = '',
  fallbackToEmoji = true,
}: FlagSvgProps) {
  const flagData = flagSvgPaths[country]

  // Calculate height maintaining 4:3 aspect ratio if not specified
  const calculatedHeight = height ?? Math.round(width * 0.75)

  // Fallback to emoji if no SVG data
  if (!flagData) {
    if (fallbackToEmoji) {
      const countryData = getCountryByIso(country)
      return (
        <span
          className={`maskdial-flag maskdial-flag-emoji ${className}`}
          role="img"
          aria-label={`${countryData?.name ?? country} flag`}
        >
          {countryData?.flag ?? '🏳️'}
        </span>
      )
    }
    return null
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={flagData.viewBox}
      width={width}
      height={calculatedHeight}
      className={`maskdial-flag maskdial-flag-svg ${className}`}
      role="img"
      aria-label={`${flagData.name} flag`}
    >
      {flagData.paths.map((path, index) => (
        <path key={index} d={path.d} fill={path.fill} />
      ))}
      {flagData.rects?.map((rect, index) => (
        <rect
          key={`rect-${index}`}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          fill={rect.fill}
        />
      ))}
      {flagData.circles?.map((circle, index) => (
        <circle
          key={`circle-${index}`}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill={circle.fill}
        />
      ))}
    </svg>
  )
}

export default FlagSvg
