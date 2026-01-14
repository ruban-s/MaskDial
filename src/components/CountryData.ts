import type { CountryCode } from 'libphonenumber-js/min'

/**
 * Country data with dial codes and flag emoji
 */
export interface Country {
  /** Country name in English */
  name: string
  /** ISO 3166-1 alpha-2 country code */
  iso: CountryCode
  /** International dial code (without +) */
  dialCode: string
  /** Flag emoji */
  flag: string
  /** Priority for sorting (lower = higher priority) */
  priority?: number
}

/**
 * Comprehensive list of countries with dial codes
 * Sorted alphabetically by name
 */
export const countries: Country[] = [
  { name: 'Afghanistan', iso: 'AF', dialCode: '93', flag: '🇦🇫' },
  { name: 'Albania', iso: 'AL', dialCode: '355', flag: '🇦🇱' },
  { name: 'Algeria', iso: 'DZ', dialCode: '213', flag: '🇩🇿' },
  { name: 'American Samoa', iso: 'AS', dialCode: '1684', flag: '🇦🇸' },
  { name: 'Andorra', iso: 'AD', dialCode: '376', flag: '🇦🇩' },
  { name: 'Angola', iso: 'AO', dialCode: '244', flag: '🇦🇴' },
  { name: 'Anguilla', iso: 'AI', dialCode: '1264', flag: '🇦🇮' },
  { name: 'Antigua and Barbuda', iso: 'AG', dialCode: '1268', flag: '🇦🇬' },
  { name: 'Argentina', iso: 'AR', dialCode: '54', flag: '🇦🇷' },
  { name: 'Armenia', iso: 'AM', dialCode: '374', flag: '🇦🇲' },
  { name: 'Aruba', iso: 'AW', dialCode: '297', flag: '🇦🇼' },
  { name: 'Australia', iso: 'AU', dialCode: '61', flag: '🇦🇺' },
  { name: 'Austria', iso: 'AT', dialCode: '43', flag: '🇦🇹' },
  { name: 'Azerbaijan', iso: 'AZ', dialCode: '994', flag: '🇦🇿' },
  { name: 'Bahamas', iso: 'BS', dialCode: '1242', flag: '🇧🇸' },
  { name: 'Bahrain', iso: 'BH', dialCode: '973', flag: '🇧🇭' },
  { name: 'Bangladesh', iso: 'BD', dialCode: '880', flag: '🇧🇩' },
  { name: 'Barbados', iso: 'BB', dialCode: '1246', flag: '🇧🇧' },
  { name: 'Belarus', iso: 'BY', dialCode: '375', flag: '🇧🇾' },
  { name: 'Belgium', iso: 'BE', dialCode: '32', flag: '🇧🇪' },
  { name: 'Belize', iso: 'BZ', dialCode: '501', flag: '🇧🇿' },
  { name: 'Benin', iso: 'BJ', dialCode: '229', flag: '🇧🇯' },
  { name: 'Bermuda', iso: 'BM', dialCode: '1441', flag: '🇧🇲' },
  { name: 'Bhutan', iso: 'BT', dialCode: '975', flag: '🇧🇹' },
  { name: 'Bolivia', iso: 'BO', dialCode: '591', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', iso: 'BA', dialCode: '387', flag: '🇧🇦' },
  { name: 'Botswana', iso: 'BW', dialCode: '267', flag: '🇧🇼' },
  { name: 'Brazil', iso: 'BR', dialCode: '55', flag: '🇧🇷' },
  { name: 'British Virgin Islands', iso: 'VG', dialCode: '1284', flag: '🇻🇬' },
  { name: 'Brunei', iso: 'BN', dialCode: '673', flag: '🇧🇳' },
  { name: 'Bulgaria', iso: 'BG', dialCode: '359', flag: '🇧🇬' },
  { name: 'Burkina Faso', iso: 'BF', dialCode: '226', flag: '🇧🇫' },
  { name: 'Burundi', iso: 'BI', dialCode: '257', flag: '🇧🇮' },
  { name: 'Cambodia', iso: 'KH', dialCode: '855', flag: '🇰🇭' },
  { name: 'Cameroon', iso: 'CM', dialCode: '237', flag: '🇨🇲' },
  { name: 'Canada', iso: 'CA', dialCode: '1', flag: '🇨🇦', priority: 1 },
  { name: 'Cape Verde', iso: 'CV', dialCode: '238', flag: '🇨🇻' },
  { name: 'Cayman Islands', iso: 'KY', dialCode: '1345', flag: '🇰🇾' },
  { name: 'Central African Republic', iso: 'CF', dialCode: '236', flag: '🇨🇫' },
  { name: 'Chad', iso: 'TD', dialCode: '235', flag: '🇹🇩' },
  { name: 'Chile', iso: 'CL', dialCode: '56', flag: '🇨🇱' },
  { name: 'China', iso: 'CN', dialCode: '86', flag: '🇨🇳' },
  { name: 'Colombia', iso: 'CO', dialCode: '57', flag: '🇨🇴' },
  { name: 'Comoros', iso: 'KM', dialCode: '269', flag: '🇰🇲' },
  { name: 'Congo', iso: 'CG', dialCode: '242', flag: '🇨🇬' },
  { name: 'Congo (DRC)', iso: 'CD', dialCode: '243', flag: '🇨🇩' },
  { name: 'Cook Islands', iso: 'CK', dialCode: '682', flag: '🇨🇰' },
  { name: 'Costa Rica', iso: 'CR', dialCode: '506', flag: '🇨🇷' },
  { name: 'Croatia', iso: 'HR', dialCode: '385', flag: '🇭🇷' },
  { name: 'Cuba', iso: 'CU', dialCode: '53', flag: '🇨🇺' },
  { name: 'Cyprus', iso: 'CY', dialCode: '357', flag: '🇨🇾' },
  { name: 'Czech Republic', iso: 'CZ', dialCode: '420', flag: '🇨🇿' },
  { name: 'Denmark', iso: 'DK', dialCode: '45', flag: '🇩🇰' },
  { name: 'Djibouti', iso: 'DJ', dialCode: '253', flag: '🇩🇯' },
  { name: 'Dominica', iso: 'DM', dialCode: '1767', flag: '🇩🇲' },
  { name: 'Dominican Republic', iso: 'DO', dialCode: '1809', flag: '🇩🇴' },
  { name: 'Ecuador', iso: 'EC', dialCode: '593', flag: '🇪🇨' },
  { name: 'Egypt', iso: 'EG', dialCode: '20', flag: '🇪🇬' },
  { name: 'El Salvador', iso: 'SV', dialCode: '503', flag: '🇸🇻' },
  { name: 'Equatorial Guinea', iso: 'GQ', dialCode: '240', flag: '🇬🇶' },
  { name: 'Eritrea', iso: 'ER', dialCode: '291', flag: '🇪🇷' },
  { name: 'Estonia', iso: 'EE', dialCode: '372', flag: '🇪🇪' },
  { name: 'Eswatini', iso: 'SZ', dialCode: '268', flag: '🇸🇿' },
  { name: 'Ethiopia', iso: 'ET', dialCode: '251', flag: '🇪🇹' },
  { name: 'Falkland Islands', iso: 'FK', dialCode: '500', flag: '🇫🇰' },
  { name: 'Faroe Islands', iso: 'FO', dialCode: '298', flag: '🇫🇴' },
  { name: 'Fiji', iso: 'FJ', dialCode: '679', flag: '🇫🇯' },
  { name: 'Finland', iso: 'FI', dialCode: '358', flag: '🇫🇮' },
  { name: 'France', iso: 'FR', dialCode: '33', flag: '🇫🇷' },
  { name: 'French Guiana', iso: 'GF', dialCode: '594', flag: '🇬🇫' },
  { name: 'French Polynesia', iso: 'PF', dialCode: '689', flag: '🇵🇫' },
  { name: 'Gabon', iso: 'GA', dialCode: '241', flag: '🇬🇦' },
  { name: 'Gambia', iso: 'GM', dialCode: '220', flag: '🇬🇲' },
  { name: 'Georgia', iso: 'GE', dialCode: '995', flag: '🇬🇪' },
  { name: 'Germany', iso: 'DE', dialCode: '49', flag: '🇩🇪' },
  { name: 'Ghana', iso: 'GH', dialCode: '233', flag: '🇬🇭' },
  { name: 'Gibraltar', iso: 'GI', dialCode: '350', flag: '🇬🇮' },
  { name: 'Greece', iso: 'GR', dialCode: '30', flag: '🇬🇷' },
  { name: 'Greenland', iso: 'GL', dialCode: '299', flag: '🇬🇱' },
  { name: 'Grenada', iso: 'GD', dialCode: '1473', flag: '🇬🇩' },
  { name: 'Guadeloupe', iso: 'GP', dialCode: '590', flag: '🇬🇵' },
  { name: 'Guam', iso: 'GU', dialCode: '1671', flag: '🇬🇺' },
  { name: 'Guatemala', iso: 'GT', dialCode: '502', flag: '🇬🇹' },
  { name: 'Guinea', iso: 'GN', dialCode: '224', flag: '🇬🇳' },
  { name: 'Guinea-Bissau', iso: 'GW', dialCode: '245', flag: '🇬🇼' },
  { name: 'Guyana', iso: 'GY', dialCode: '592', flag: '🇬🇾' },
  { name: 'Haiti', iso: 'HT', dialCode: '509', flag: '🇭🇹' },
  { name: 'Honduras', iso: 'HN', dialCode: '504', flag: '🇭🇳' },
  { name: 'Hong Kong', iso: 'HK', dialCode: '852', flag: '🇭🇰' },
  { name: 'Hungary', iso: 'HU', dialCode: '36', flag: '🇭🇺' },
  { name: 'Iceland', iso: 'IS', dialCode: '354', flag: '🇮🇸' },
  { name: 'India', iso: 'IN', dialCode: '91', flag: '🇮🇳' },
  { name: 'Indonesia', iso: 'ID', dialCode: '62', flag: '🇮🇩' },
  { name: 'Iran', iso: 'IR', dialCode: '98', flag: '🇮🇷' },
  { name: 'Iraq', iso: 'IQ', dialCode: '964', flag: '🇮🇶' },
  { name: 'Ireland', iso: 'IE', dialCode: '353', flag: '🇮🇪' },
  { name: 'Israel', iso: 'IL', dialCode: '972', flag: '🇮🇱' },
  { name: 'Italy', iso: 'IT', dialCode: '39', flag: '🇮🇹' },
  { name: 'Ivory Coast', iso: 'CI', dialCode: '225', flag: '🇨🇮' },
  { name: 'Jamaica', iso: 'JM', dialCode: '1876', flag: '🇯🇲' },
  { name: 'Japan', iso: 'JP', dialCode: '81', flag: '🇯🇵' },
  { name: 'Jordan', iso: 'JO', dialCode: '962', flag: '🇯🇴' },
  { name: 'Kazakhstan', iso: 'KZ', dialCode: '7', flag: '🇰🇿' },
  { name: 'Kenya', iso: 'KE', dialCode: '254', flag: '🇰🇪' },
  { name: 'Kiribati', iso: 'KI', dialCode: '686', flag: '🇰🇮' },
  { name: 'Kosovo', iso: 'XK', dialCode: '383', flag: '🇽🇰' },
  { name: 'Kuwait', iso: 'KW', dialCode: '965', flag: '🇰🇼' },
  { name: 'Kyrgyzstan', iso: 'KG', dialCode: '996', flag: '🇰🇬' },
  { name: 'Laos', iso: 'LA', dialCode: '856', flag: '🇱🇦' },
  { name: 'Latvia', iso: 'LV', dialCode: '371', flag: '🇱🇻' },
  { name: 'Lebanon', iso: 'LB', dialCode: '961', flag: '🇱🇧' },
  { name: 'Lesotho', iso: 'LS', dialCode: '266', flag: '🇱🇸' },
  { name: 'Liberia', iso: 'LR', dialCode: '231', flag: '🇱🇷' },
  { name: 'Libya', iso: 'LY', dialCode: '218', flag: '🇱🇾' },
  { name: 'Liechtenstein', iso: 'LI', dialCode: '423', flag: '🇱🇮' },
  { name: 'Lithuania', iso: 'LT', dialCode: '370', flag: '🇱🇹' },
  { name: 'Luxembourg', iso: 'LU', dialCode: '352', flag: '🇱🇺' },
  { name: 'Macau', iso: 'MO', dialCode: '853', flag: '🇲🇴' },
  { name: 'Madagascar', iso: 'MG', dialCode: '261', flag: '🇲🇬' },
  { name: 'Malawi', iso: 'MW', dialCode: '265', flag: '🇲🇼' },
  { name: 'Malaysia', iso: 'MY', dialCode: '60', flag: '🇲🇾' },
  { name: 'Maldives', iso: 'MV', dialCode: '960', flag: '🇲🇻' },
  { name: 'Mali', iso: 'ML', dialCode: '223', flag: '🇲🇱' },
  { name: 'Malta', iso: 'MT', dialCode: '356', flag: '🇲🇹' },
  { name: 'Marshall Islands', iso: 'MH', dialCode: '692', flag: '🇲🇭' },
  { name: 'Martinique', iso: 'MQ', dialCode: '596', flag: '🇲🇶' },
  { name: 'Mauritania', iso: 'MR', dialCode: '222', flag: '🇲🇷' },
  { name: 'Mauritius', iso: 'MU', dialCode: '230', flag: '🇲🇺' },
  { name: 'Mexico', iso: 'MX', dialCode: '52', flag: '🇲🇽' },
  { name: 'Micronesia', iso: 'FM', dialCode: '691', flag: '🇫🇲' },
  { name: 'Moldova', iso: 'MD', dialCode: '373', flag: '🇲🇩' },
  { name: 'Monaco', iso: 'MC', dialCode: '377', flag: '🇲🇨' },
  { name: 'Mongolia', iso: 'MN', dialCode: '976', flag: '🇲🇳' },
  { name: 'Montenegro', iso: 'ME', dialCode: '382', flag: '🇲🇪' },
  { name: 'Montserrat', iso: 'MS', dialCode: '1664', flag: '🇲🇸' },
  { name: 'Morocco', iso: 'MA', dialCode: '212', flag: '🇲🇦' },
  { name: 'Mozambique', iso: 'MZ', dialCode: '258', flag: '🇲🇿' },
  { name: 'Myanmar', iso: 'MM', dialCode: '95', flag: '🇲🇲' },
  { name: 'Namibia', iso: 'NA', dialCode: '264', flag: '🇳🇦' },
  { name: 'Nauru', iso: 'NR', dialCode: '674', flag: '🇳🇷' },
  { name: 'Nepal', iso: 'NP', dialCode: '977', flag: '🇳🇵' },
  { name: 'Netherlands', iso: 'NL', dialCode: '31', flag: '🇳🇱' },
  { name: 'New Caledonia', iso: 'NC', dialCode: '687', flag: '🇳🇨' },
  { name: 'New Zealand', iso: 'NZ', dialCode: '64', flag: '🇳🇿' },
  { name: 'Nicaragua', iso: 'NI', dialCode: '505', flag: '🇳🇮' },
  { name: 'Niger', iso: 'NE', dialCode: '227', flag: '🇳🇪' },
  { name: 'Nigeria', iso: 'NG', dialCode: '234', flag: '🇳🇬' },
  { name: 'North Korea', iso: 'KP', dialCode: '850', flag: '🇰🇵' },
  { name: 'North Macedonia', iso: 'MK', dialCode: '389', flag: '🇲🇰' },
  { name: 'Norway', iso: 'NO', dialCode: '47', flag: '🇳🇴' },
  { name: 'Oman', iso: 'OM', dialCode: '968', flag: '🇴🇲' },
  { name: 'Pakistan', iso: 'PK', dialCode: '92', flag: '🇵🇰' },
  { name: 'Palau', iso: 'PW', dialCode: '680', flag: '🇵🇼' },
  { name: 'Palestine', iso: 'PS', dialCode: '970', flag: '🇵🇸' },
  { name: 'Panama', iso: 'PA', dialCode: '507', flag: '🇵🇦' },
  { name: 'Papua New Guinea', iso: 'PG', dialCode: '675', flag: '🇵🇬' },
  { name: 'Paraguay', iso: 'PY', dialCode: '595', flag: '🇵🇾' },
  { name: 'Peru', iso: 'PE', dialCode: '51', flag: '🇵🇪' },
  { name: 'Philippines', iso: 'PH', dialCode: '63', flag: '🇵🇭' },
  { name: 'Poland', iso: 'PL', dialCode: '48', flag: '🇵🇱' },
  { name: 'Portugal', iso: 'PT', dialCode: '351', flag: '🇵🇹' },
  { name: 'Puerto Rico', iso: 'PR', dialCode: '1787', flag: '🇵🇷' },
  { name: 'Qatar', iso: 'QA', dialCode: '974', flag: '🇶🇦' },
  { name: 'Réunion', iso: 'RE', dialCode: '262', flag: '🇷🇪' },
  { name: 'Romania', iso: 'RO', dialCode: '40', flag: '🇷🇴' },
  { name: 'Russia', iso: 'RU', dialCode: '7', flag: '🇷🇺', priority: 0 },
  { name: 'Rwanda', iso: 'RW', dialCode: '250', flag: '🇷🇼' },
  { name: 'Saint Kitts and Nevis', iso: 'KN', dialCode: '1869', flag: '🇰🇳' },
  { name: 'Saint Lucia', iso: 'LC', dialCode: '1758', flag: '🇱🇨' },
  { name: 'Saint Vincent and the Grenadines', iso: 'VC', dialCode: '1784', flag: '🇻🇨' },
  { name: 'Samoa', iso: 'WS', dialCode: '685', flag: '🇼🇸' },
  { name: 'San Marino', iso: 'SM', dialCode: '378', flag: '🇸🇲' },
  { name: 'São Tomé and Príncipe', iso: 'ST', dialCode: '239', flag: '🇸🇹' },
  { name: 'Saudi Arabia', iso: 'SA', dialCode: '966', flag: '🇸🇦' },
  { name: 'Senegal', iso: 'SN', dialCode: '221', flag: '🇸🇳' },
  { name: 'Serbia', iso: 'RS', dialCode: '381', flag: '🇷🇸' },
  { name: 'Seychelles', iso: 'SC', dialCode: '248', flag: '🇸🇨' },
  { name: 'Sierra Leone', iso: 'SL', dialCode: '232', flag: '🇸🇱' },
  { name: 'Singapore', iso: 'SG', dialCode: '65', flag: '🇸🇬' },
  { name: 'Slovakia', iso: 'SK', dialCode: '421', flag: '🇸🇰' },
  { name: 'Slovenia', iso: 'SI', dialCode: '386', flag: '🇸🇮' },
  { name: 'Solomon Islands', iso: 'SB', dialCode: '677', flag: '🇸🇧' },
  { name: 'Somalia', iso: 'SO', dialCode: '252', flag: '🇸🇴' },
  { name: 'South Africa', iso: 'ZA', dialCode: '27', flag: '🇿🇦' },
  { name: 'South Korea', iso: 'KR', dialCode: '82', flag: '🇰🇷' },
  { name: 'South Sudan', iso: 'SS', dialCode: '211', flag: '🇸🇸' },
  { name: 'Spain', iso: 'ES', dialCode: '34', flag: '🇪🇸' },
  { name: 'Sri Lanka', iso: 'LK', dialCode: '94', flag: '🇱🇰' },
  { name: 'Sudan', iso: 'SD', dialCode: '249', flag: '🇸🇩' },
  { name: 'Suriname', iso: 'SR', dialCode: '597', flag: '🇸🇷' },
  { name: 'Sweden', iso: 'SE', dialCode: '46', flag: '🇸🇪' },
  { name: 'Switzerland', iso: 'CH', dialCode: '41', flag: '🇨🇭' },
  { name: 'Syria', iso: 'SY', dialCode: '963', flag: '🇸🇾' },
  { name: 'Taiwan', iso: 'TW', dialCode: '886', flag: '🇹🇼' },
  { name: 'Tajikistan', iso: 'TJ', dialCode: '992', flag: '🇹🇯' },
  { name: 'Tanzania', iso: 'TZ', dialCode: '255', flag: '🇹🇿' },
  { name: 'Thailand', iso: 'TH', dialCode: '66', flag: '🇹🇭' },
  { name: 'Timor-Leste', iso: 'TL', dialCode: '670', flag: '🇹🇱' },
  { name: 'Togo', iso: 'TG', dialCode: '228', flag: '🇹🇬' },
  { name: 'Tonga', iso: 'TO', dialCode: '676', flag: '🇹🇴' },
  { name: 'Trinidad and Tobago', iso: 'TT', dialCode: '1868', flag: '🇹🇹' },
  { name: 'Tunisia', iso: 'TN', dialCode: '216', flag: '🇹🇳' },
  { name: 'Turkey', iso: 'TR', dialCode: '90', flag: '🇹🇷' },
  { name: 'Turkmenistan', iso: 'TM', dialCode: '993', flag: '🇹🇲' },
  { name: 'Turks and Caicos Islands', iso: 'TC', dialCode: '1649', flag: '🇹🇨' },
  { name: 'Tuvalu', iso: 'TV', dialCode: '688', flag: '🇹🇻' },
  { name: 'Uganda', iso: 'UG', dialCode: '256', flag: '🇺🇬' },
  { name: 'Ukraine', iso: 'UA', dialCode: '380', flag: '🇺🇦' },
  { name: 'United Arab Emirates', iso: 'AE', dialCode: '971', flag: '🇦🇪' },
  { name: 'United Kingdom', iso: 'GB', dialCode: '44', flag: '🇬🇧' },
  { name: 'United States', iso: 'US', dialCode: '1', flag: '🇺🇸', priority: 0 },
  { name: 'Uruguay', iso: 'UY', dialCode: '598', flag: '🇺🇾' },
  { name: 'US Virgin Islands', iso: 'VI', dialCode: '1340', flag: '🇻🇮' },
  { name: 'Uzbekistan', iso: 'UZ', dialCode: '998', flag: '🇺🇿' },
  { name: 'Vanuatu', iso: 'VU', dialCode: '678', flag: '🇻🇺' },
  { name: 'Vatican City', iso: 'VA', dialCode: '379', flag: '🇻🇦' },
  { name: 'Venezuela', iso: 'VE', dialCode: '58', flag: '🇻🇪' },
  { name: 'Vietnam', iso: 'VN', dialCode: '84', flag: '🇻🇳' },
  { name: 'Yemen', iso: 'YE', dialCode: '967', flag: '🇾🇪' },
  { name: 'Zambia', iso: 'ZM', dialCode: '260', flag: '🇿🇲' },
  { name: 'Zimbabwe', iso: 'ZW', dialCode: '263', flag: '🇿🇼' },
]

/**
 * Map of ISO codes to countries for O(1) lookup
 */
export const countryByIso = new Map<CountryCode, Country>(
  countries.map((c) => [c.iso, c])
)

/**
 * Map of dial codes to countries (first match for ambiguous codes)
 */
export const countryByDialCode = new Map<string, Country[]>()
countries.forEach((c) => {
  const existing = countryByDialCode.get(c.dialCode) || []
  existing.push(c)
  countryByDialCode.set(c.dialCode, existing)
})

/**
 * Get country by ISO code
 */
export function getCountryByIso(iso: CountryCode): Country | undefined {
  return countryByIso.get(iso)
}

/**
 * Get countries by dial code (may return multiple for shared codes like +1)
 */
export function getCountriesByDialCode(dialCode: string): Country[] {
  const normalized = dialCode.replace(/^\+/, '')
  return countryByDialCode.get(normalized) || []
}

/**
 * Search countries by name or dial code
 */
export function searchCountries(query: string): Country[] {
  const q = query.toLowerCase().trim()
  if (!q) return countries

  return countries.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.iso.toLowerCase() === q
  )
}

/**
 * Get sorted countries with priority countries first
 */
export function getSortedCountries(priorityCountries?: CountryCode[]): Country[] {
  const priority = priorityCountries || ['US', 'GB', 'CA']
  const prioritySet = new Set(priority)

  return [...countries].sort((a, b) => {
    const aInPriority = prioritySet.has(a.iso)
    const bInPriority = prioritySet.has(b.iso)

    if (aInPriority && !bInPriority) return -1
    if (!aInPriority && bInPriority) return 1
    if (aInPriority && bInPriority) {
      return priority.indexOf(a.iso) - priority.indexOf(b.iso)
    }
    return a.name.localeCompare(b.name)
  })
}
