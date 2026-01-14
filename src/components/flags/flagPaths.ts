import type { CountryCode } from 'libphonenumber-js/min'

export interface PathData {
  d: string
  fill: string
}

export interface RectData {
  x: number
  y: number
  width: number
  height: number
  fill: string
}

export interface CircleData {
  cx: number
  cy: number
  r: number
  fill: string
}

export interface FlagData {
  name: string
  viewBox: string
  paths: PathData[]
  rects?: RectData[]
  circles?: CircleData[]
}

/**
 * SVG path data for country flags
 * Using simplified designs for common countries
 * Viewbox is typically 640x480 (4:3 ratio)
 */
export const flagSvgPaths: Partial<Record<CountryCode, FlagData>> = {
  // United States
  US: {
    name: 'United States',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      // Red stripes
      { x: 0, y: 0, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 74, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 148, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 222, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 296, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 370, width: 640, height: 37, fill: '#B22234' },
      { x: 0, y: 444, width: 640, height: 36, fill: '#B22234' },
      // White stripes
      { x: 0, y: 37, width: 640, height: 37, fill: '#FFFFFF' },
      { x: 0, y: 111, width: 640, height: 37, fill: '#FFFFFF' },
      { x: 0, y: 185, width: 640, height: 37, fill: '#FFFFFF' },
      { x: 0, y: 259, width: 640, height: 37, fill: '#FFFFFF' },
      { x: 0, y: 333, width: 640, height: 37, fill: '#FFFFFF' },
      { x: 0, y: 407, width: 640, height: 37, fill: '#FFFFFF' },
      // Blue canton
      { x: 0, y: 0, width: 256, height: 259, fill: '#3C3B6E' },
    ],
  },

  // United Kingdom
  GB: {
    name: 'United Kingdom',
    viewBox: '0 0 640 480',
    paths: [
      // Blue background
      { d: 'M0 0h640v480H0z', fill: '#012169' },
      // White diagonals
      { d: 'M0 0l640 480m0-480L0 480', fill: 'none' },
      { d: 'M0 0l640 480M640 0L0 480', fill: 'none' },
    ],
    rects: [
      // Blue background
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      // White cross
      { x: 0, y: 192, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 272, y: 0, width: 96, height: 480, fill: '#FFFFFF' },
      // Red cross
      { x: 0, y: 208, width: 640, height: 64, fill: '#C8102E' },
      { x: 288, y: 0, width: 64, height: 480, fill: '#C8102E' },
    ],
  },

  // Canada
  CA: {
    name: 'Canada',
    viewBox: '0 0 640 480',
    paths: [
      // Maple leaf (simplified)
      {
        d: 'M320 80l-20 60-60-20 40 60-60 20 60 40-20 60 60-40 60 40-20-60 60-40-60-20 40-60-60 20z',
        fill: '#FF0000',
      },
    ],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FF0000' },
      { x: 160, y: 0, width: 320, height: 480, fill: '#FFFFFF' },
      { x: 480, y: 0, width: 160, height: 480, fill: '#FF0000' },
    ],
  },

  // Australia
  AU: {
    name: 'Australia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      // Blue background
      { x: 0, y: 0, width: 640, height: 480, fill: '#00008B' },
      // Union Jack canton (simplified)
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
      { x: 0, y: 96, width: 320, height: 48, fill: '#FFFFFF' },
      { x: 136, y: 0, width: 48, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 104, width: 320, height: 32, fill: '#C8102E' },
      { x: 144, y: 0, width: 32, height: 240, fill: '#C8102E' },
    ],
  },

  // Germany
  DE: {
    name: 'Germany',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#DD0000' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#FFCE00' },
    ],
  },

  // France
  FR: {
    name: 'France',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Italy
  IT: {
    name: 'Italy',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#009246' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#CE2B37' },
    ],
  },

  // Spain
  ES: {
    name: 'Spain',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#AA151B' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#F1BF00' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#AA151B' },
    ],
  },

  // Netherlands
  NL: {
    name: 'Netherlands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#AE1C28' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#21468B' },
    ],
  },

  // Belgium
  BE: {
    name: 'Belgium',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#000000' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FAE042' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Switzerland
  CH: {
    name: 'Switzerland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FF0000' },
      { x: 270, y: 120, width: 100, height: 240, fill: '#FFFFFF' },
      { x: 200, y: 190, width: 240, height: 100, fill: '#FFFFFF' },
    ],
  },

  // Austria
  AT: {
    name: 'Austria',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#ED2939' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#ED2939' },
    ],
  },

  // Sweden
  SE: {
    name: 'Sweden',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#006AA7' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#FECC00' },
      { x: 176, y: 0, width: 96, height: 480, fill: '#FECC00' },
    ],
  },

  // Norway
  NO: {
    name: 'Norway',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#BA0C2F' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#00205B' },
      { x: 184, y: 0, width: 80, height: 480, fill: '#00205B' },
    ],
  },

  // Denmark
  DK: {
    name: 'Denmark',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#C8102E' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 176, y: 0, width: 96, height: 480, fill: '#FFFFFF' },
    ],
  },

  // Finland
  FI: {
    name: 'Finland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#003580' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#003580' },
    ],
  },

  // Poland
  PL: {
    name: 'Poland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#DC143C' },
    ],
  },

  // Russia
  RU: {
    name: 'Russia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0039A6' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#D52B1E' },
    ],
  },

  // Japan
  JP: {
    name: 'Japan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' }],
    circles: [{ cx: 320, cy: 240, r: 120, fill: '#BC002D' }],
  },

  // China
  CN: {
    name: 'China',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#DE2910' }],
  },

  // South Korea
  KR: {
    name: 'South Korea',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' }],
    circles: [
      { cx: 320, cy: 240, r: 100, fill: '#C60C30' },
      { cx: 320, cy: 240, r: 50, fill: '#003478' },
    ],
  },

  // India
  IN: {
    name: 'India',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FF9933' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#138808' },
    ],
    circles: [{ cx: 320, cy: 240, r: 40, fill: '#000080' }],
  },

  // Brazil
  BR: {
    name: 'Brazil',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M320 80L580 240 320 400 60 240z', fill: '#FED500' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#009B3A' }],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#002776' }],
  },

  // Mexico
  MX: {
    name: 'Mexico',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#006847' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#CE1126' },
    ],
  },

  // Argentina
  AR: {
    name: 'Argentina',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#74ACDF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#74ACDF' },
    ],
    circles: [{ cx: 320, cy: 240, r: 40, fill: '#F6B40E' }],
  },

  // South Africa
  ZA: {
    name: 'South Africa',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l240 240L0 480z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#DE3831' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#002395' },
      { x: 120, y: 192, width: 520, height: 96, fill: '#007A4D' },
    ],
  },

  // Nigeria
  NG: {
    name: 'Nigeria',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#008751' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#008751' },
    ],
  },

  // Egypt
  EG: {
    name: 'Egypt',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#000000' },
    ],
  },

  // Saudi Arabia
  SA: {
    name: 'Saudi Arabia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#006C35' }],
  },

  // United Arab Emirates
  AE: {
    name: 'United Arab Emirates',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FF0000' },
      { x: 160, y: 0, width: 480, height: 160, fill: '#00732F' },
      { x: 160, y: 160, width: 480, height: 160, fill: '#FFFFFF' },
      { x: 160, y: 320, width: 480, height: 160, fill: '#000000' },
    ],
  },

  // Israel
  IL: {
    name: 'Israel',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 60, width: 640, height: 60, fill: '#0038B8' },
      { x: 0, y: 360, width: 640, height: 60, fill: '#0038B8' },
    ],
  },

  // Turkey
  TR: {
    name: 'Turkey',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#E30A17' }],
    circles: [
      { cx: 260, cy: 240, r: 100, fill: '#FFFFFF' },
      { cx: 290, cy: 240, r: 80, fill: '#E30A17' },
    ],
  },

  // Greece
  GR: {
    name: 'Greece',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 53, fill: '#0D5EAF' },
      { x: 0, y: 53, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 106, width: 640, height: 53, fill: '#0D5EAF' },
      { x: 0, y: 159, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 212, width: 640, height: 54, fill: '#0D5EAF' },
      { x: 0, y: 266, width: 640, height: 54, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 53, fill: '#0D5EAF' },
      { x: 0, y: 373, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 426, width: 640, height: 54, fill: '#0D5EAF' },
      // Canton
      { x: 0, y: 0, width: 266, height: 266, fill: '#0D5EAF' },
      { x: 0, y: 106, width: 266, height: 54, fill: '#FFFFFF' },
      { x: 106, y: 0, width: 54, height: 266, fill: '#FFFFFF' },
    ],
  },

  // Portugal
  PT: {
    name: 'Portugal',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 256, height: 480, fill: '#006600' },
      { x: 256, y: 0, width: 384, height: 480, fill: '#FF0000' },
    ],
    circles: [{ cx: 256, cy: 240, r: 80, fill: '#FFCC00' }],
  },

  // Ireland
  IE: {
    name: 'Ireland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#169B62' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#FF883E' },
    ],
  },

  // New Zealand
  NZ: {
    name: 'New Zealand',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#00247D' },
      // Union Jack canton (simplified)
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
      { x: 0, y: 96, width: 320, height: 48, fill: '#FFFFFF' },
      { x: 136, y: 0, width: 48, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 104, width: 320, height: 32, fill: '#C8102E' },
      { x: 144, y: 0, width: 32, height: 240, fill: '#C8102E' },
    ],
  },

  // Singapore
  SG: {
    name: 'Singapore',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#ED2939' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#FFFFFF' },
    ],
  },

  // Malaysia
  MY: {
    name: 'Malaysia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 34, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 68, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 102, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 136, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 170, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 204, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 238, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 272, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 306, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 340, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 374, width: 640, height: 34, fill: '#FFFFFF' },
      { x: 0, y: 408, width: 640, height: 34, fill: '#CC0000' },
      { x: 0, y: 442, width: 640, height: 38, fill: '#FFFFFF' },
      // Canton
      { x: 0, y: 0, width: 320, height: 272, fill: '#010066' },
    ],
  },

  // Thailand
  TH: {
    name: 'Thailand',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 80, fill: '#ED1C24' },
      { x: 0, y: 80, width: 640, height: 80, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#241D4F' },
      { x: 0, y: 320, width: 640, height: 80, fill: '#FFFFFF' },
      { x: 0, y: 400, width: 640, height: 80, fill: '#ED1C24' },
    ],
  },

  // Indonesia
  ID: {
    name: 'Indonesia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FF0000' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#FFFFFF' },
    ],
  },

  // Philippines
  PH: {
    name: 'Philippines',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#FFFFFF' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#0038A8' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#CE1126' },
    ],
  },

  // Vietnam
  VN: {
    name: 'Vietnam',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#DA251D' }],
  },

  // Pakistan
  PK: {
    name: 'Pakistan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 480, height: 480, fill: '#01411C' },
    ],
  },

  // Bangladesh
  BD: {
    name: 'Bangladesh',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#006A4E' }],
    circles: [{ cx: 280, cy: 240, r: 120, fill: '#F42A41' }],
  },

  // Ukraine
  UA: {
    name: 'Ukraine',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#005BBB' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#FFD500' },
    ],
  },

  // Czech Republic
  CZ: {
    name: 'Czech Republic',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#11457E' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#D7141A' },
    ],
  },

  // Romania
  RO: {
    name: 'Romania',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002B7F' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FCD116' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#CE1126' },
    ],
  },

  // Hungary
  HU: {
    name: 'Hungary',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE2939' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#477050' },
    ],
  },

  // Afghanistan
  AF: {
    name: 'Afghanistan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#000000' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#AF0000' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#009900' },
    ],
  },

  // Albania
  AL: {
    name: 'Albania',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#E41E20' }],
  },

  // Algeria
  DZ: {
    name: 'Algeria',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 320, height: 480, fill: '#006633' },
      { x: 320, y: 0, width: 320, height: 480, fill: '#FFFFFF' },
    ],
  },

  // Andorra
  AD: {
    name: 'Andorra',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#0018A8' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FEDF00' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#D52B1E' },
    ],
  },

  // Angola
  AO: {
    name: 'Angola',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#CC092F' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#000000' },
    ],
  },

  // Antigua and Barbuda
  AG: {
    name: 'Antigua and Barbuda',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 480h320L320 0z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#CE1126' },
      { x: 120, y: 160, width: 400, height: 80, fill: '#FCD116' },
    ],
  },

  // Armenia
  AM: {
    name: 'Armenia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#D90012' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0033A0' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#F2A800' },
    ],
  },

  // Azerbaijan
  AZ: {
    name: 'Azerbaijan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#0098C3' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#E00034' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#00AE65' },
    ],
  },

  // Bahamas
  BS: {
    name: 'Bahamas',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l240 240L0 480z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#00ABC9' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FAE042' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#00ABC9' },
    ],
  },

  // Bahrain
  BH: {
    name: 'Bahrain',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 480, height: 480, fill: '#CE1126' },
    ],
  },

  // Barbados
  BB: {
    name: 'Barbados',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#00267F' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFC726' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#00267F' },
    ],
  },

  // Belarus
  BY: {
    name: 'Belarus',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 80, height: 480, fill: '#FFFFFF' },
      { x: 80, y: 0, width: 560, height: 320, fill: '#CE1720' },
      { x: 80, y: 320, width: 560, height: 160, fill: '#007D2C' },
    ],
  },

  // Belize
  BZ: {
    name: 'Belize',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 60, fill: '#CE1126' },
      { x: 0, y: 60, width: 640, height: 360, fill: '#003F87' },
      { x: 0, y: 420, width: 640, height: 60, fill: '#CE1126' },
    ],
    circles: [{ cx: 320, cy: 240, r: 100, fill: '#FFFFFF' }],
  },

  // Benin
  BJ: {
    name: 'Benin',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#008751' },
      { x: 213, y: 0, width: 427, height: 240, fill: '#FCD116' },
      { x: 213, y: 240, width: 427, height: 240, fill: '#E8112D' },
    ],
  },

  // Bhutan
  BT: {
    name: 'Bhutan',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480H0z', fill: '#FF4E12' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFD520' }],
  },

  // Bolivia
  BO: {
    name: 'Bolivia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#D52B1E' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#F9E300' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#007934' },
    ],
  },

  // Bosnia and Herzegovina
  BA: {
    name: 'Bosnia and Herzegovina',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M213 0l427 480H213z', fill: '#002395' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#002395' }],
  },

  // Botswana
  BW: {
    name: 'Botswana',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 180, fill: '#6DA9D2' },
      { x: 0, y: 180, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#000000' },
      { x: 0, y: 280, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 300, width: 640, height: 180, fill: '#6DA9D2' },
    ],
  },

  // Brunei
  BN: {
    name: 'Brunei',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#F7E017' },
      { x: 0, y: 120, width: 640, height: 120, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#000000' },
    ],
  },

  // Bulgaria
  BG: {
    name: 'Bulgaria',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#00966E' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#D62612' },
    ],
  },

  // Burkina Faso
  BF: {
    name: 'Burkina Faso',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#EF2B2D' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#009E49' },
    ],
  },

  // Burundi
  BI: {
    name: 'Burundi',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#CE1126' },
      { x: 320, y: 0, width: 320, height: 240, fill: '#1EB53A' },
      { x: 0, y: 240, width: 320, height: 240, fill: '#1EB53A' },
      { x: 320, y: 240, width: 320, height: 240, fill: '#CE1126' },
    ],
    circles: [{ cx: 320, cy: 240, r: 100, fill: '#FFFFFF' }],
  },

  // Cambodia
  KH: {
    name: 'Cambodia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#032EA1' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#E00025' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#032EA1' },
    ],
  },

  // Cameroon
  CM: {
    name: 'Cameroon',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#007A5E' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#CE1126' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#FCD116' },
    ],
  },

  // Cape Verde
  CV: {
    name: 'Cape Verde',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#003893' },
      { x: 0, y: 240, width: 640, height: 60, fill: '#FFFFFF' },
      { x: 0, y: 300, width: 640, height: 40, fill: '#CF2027' },
      { x: 0, y: 340, width: 640, height: 60, fill: '#FFFFFF' },
      { x: 0, y: 400, width: 640, height: 80, fill: '#003893' },
    ],
  },

  // Central African Republic
  CF: {
    name: 'Central African Republic',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#003082' },
      { x: 0, y: 120, width: 640, height: 120, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#289728' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#FFCE00' },
      { x: 280, y: 0, width: 80, height: 480, fill: '#D21034' },
    ],
  },

  // Chad
  TD: {
    name: 'Chad',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002664' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FECB00' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#C60C30' },
    ],
  },

  // Chile
  CL: {
    name: 'Chile',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 240, fill: '#0039A6' },
      { x: 213, y: 0, width: 427, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#D52B1E' },
    ],
  },

  // Colombia
  CO: {
    name: 'Colombia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FCD116' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#003893' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#CE1126' },
    ],
  },

  // Comoros
  KM: {
    name: 'Comoros',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#3A8E40' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#FFC61E' },
      { x: 0, y: 120, width: 640, height: 120, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#CE1126' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#3A8E40' },
    ],
  },

  // Congo
  CG: {
    name: 'Congo',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480H0z', fill: '#009543' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#DC241F' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FBDE4A' },
    ],
  },

  // Democratic Republic of Congo
  CD: {
    name: 'Democratic Republic of the Congo',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#007FFF' },
      { x: 0, y: 40, width: 640, height: 60, fill: '#F7D618' },
      { x: 0, y: 380, width: 640, height: 60, fill: '#F7D618' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#CE1021' },
    ],
  },

  // Costa Rica
  CR: {
    name: 'Costa Rica',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 80, fill: '#002B7F' },
      { x: 0, y: 80, width: 640, height: 80, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 320, width: 640, height: 80, fill: '#FFFFFF' },
      { x: 0, y: 400, width: 640, height: 80, fill: '#002B7F' },
    ],
  },

  // Ivory Coast
  CI: {
    name: 'Ivory Coast',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#F77F00' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#009E60' },
    ],
  },

  // Croatia
  HR: {
    name: 'Croatia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FF0000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#171796' },
    ],
  },

  // Cuba
  CU: {
    name: 'Cuba',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#002A8F' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 96, fill: '#002A8F' },
      { x: 0, y: 96, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#002A8F' },
      { x: 0, y: 288, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 0, y: 384, width: 640, height: 96, fill: '#002A8F' },
    ],
  },

  // Cyprus
  CY: {
    name: 'Cyprus',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' }],
  },

  // Djibouti
  DJ: {
    name: 'Djibouti',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#FFFFFF' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#6AB2E7' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#12AD2B' },
    ],
  },

  // Dominica
  DM: {
    name: 'Dominica',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#006B3F' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#FFFFFF' },
      { x: 280, y: 0, width: 80, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#FCD116' },
      { x: 280, y: 0, width: 80, height: 480, fill: '#FCD116' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#D41C30' }],
  },

  // Dominican Republic
  DO: {
    name: 'Dominican Republic',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 280, height: 200, fill: '#002D62' },
      { x: 360, y: 0, width: 280, height: 200, fill: '#CE1126' },
      { x: 0, y: 280, width: 280, height: 200, fill: '#CE1126' },
      { x: 360, y: 280, width: 280, height: 200, fill: '#002D62' },
      { x: 280, y: 0, width: 80, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#FFFFFF' },
    ],
  },

  // Ecuador
  EC: {
    name: 'Ecuador',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FFD100' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#0072CE' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#EF3340' },
    ],
  },

  // El Salvador
  SV: {
    name: 'El Salvador',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#0F47AF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0F47AF' },
    ],
  },

  // Equatorial Guinea
  GQ: {
    name: 'Equatorial Guinea',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l160 240L0 480z', fill: '#3E9A00' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#3E9A00' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#E32118' },
    ],
  },

  // Eritrea
  ER: {
    name: 'Eritrea',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 240L0 480z', fill: '#EA0437' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#12AD2B' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#4189DD' },
    ],
  },

  // Estonia
  EE: {
    name: 'Estonia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#0072CE' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#FFFFFF' },
    ],
  },

  // Eswatini
  SZ: {
    name: 'Eswatini',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 60, fill: '#3E5EB9' },
      { x: 0, y: 60, width: 640, height: 40, fill: '#FFD900' },
      { x: 0, y: 100, width: 640, height: 280, fill: '#B10C0C' },
      { x: 0, y: 380, width: 640, height: 40, fill: '#FFD900' },
      { x: 0, y: 420, width: 640, height: 60, fill: '#3E5EB9' },
    ],
  },

  // Ethiopia
  ET: {
    name: 'Ethiopia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#078930' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FCDD09' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#DA121A' },
    ],
    circles: [{ cx: 320, cy: 240, r: 100, fill: '#0F47AF' }],
  },

  // Fiji
  FJ: {
    name: 'Fiji',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#68BFE5' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Gabon
  GA: {
    name: 'Gabon',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#009E60' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FCD116' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#3A75C4' },
    ],
  },

  // Gambia
  GM: {
    name: 'Gambia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 140, fill: '#CE1126' },
      { x: 0, y: 140, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0C1C8C' },
      { x: 0, y: 320, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 340, width: 640, height: 140, fill: '#3A7728' },
    ],
  },

  // Georgia
  GE: {
    name: 'Georgia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#FF0000' },
      { x: 272, y: 0, width: 96, height: 480, fill: '#FF0000' },
    ],
  },

  // Ghana
  GH: {
    name: 'Ghana',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FCD116' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#006B3F' },
    ],
  },

  // Guatemala
  GT: {
    name: 'Guatemala',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#4997D0' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#4997D0' },
    ],
  },

  // Guinea
  GN: {
    name: 'Guinea',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#CE1126' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FCD116' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#009460' },
    ],
  },

  // Guinea-Bissau
  GW: {
    name: 'Guinea-Bissau',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#CE1126' },
      { x: 160, y: 0, width: 480, height: 240, fill: '#FCD116' },
      { x: 160, y: 240, width: 480, height: 240, fill: '#009E49' },
    ],
  },

  // Guyana
  GY: {
    name: 'Guyana',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 0l640 240L0 480z', fill: '#009E49' },
      { d: 'M0 0l480 240L0 480z', fill: '#FFFFFF' },
      { d: 'M0 0l320 240L0 480z', fill: '#FCD116' },
      { d: 'M0 0l160 240L0 480z', fill: '#000000' },
      { d: 'M0 40l120 200L0 440z', fill: '#CE1126' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#009E49' }],
  },

  // Haiti
  HT: {
    name: 'Haiti',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#00209F' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#D21034' },
    ],
  },

  // Honduras
  HN: {
    name: 'Honduras',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#0073CF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0073CF' },
    ],
  },

  // Hong Kong
  HK: {
    name: 'Hong Kong',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#DE2910' }],
  },

  // Iceland
  IS: {
    name: 'Iceland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#02529C' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#DC1E35' },
      { x: 184, y: 0, width: 80, height: 480, fill: '#DC1E35' },
    ],
  },

  // Iraq
  IQ: {
    name: 'Iraq',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#000000' },
    ],
  },

  // Iran
  IR: {
    name: 'Iran',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#239F40' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#DA0000' },
    ],
  },

  // Jamaica
  JM: {
    name: 'Jamaica',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 0l320 240L0 480z', fill: '#009B3A' },
      { d: 'M640 0L320 240l320 240z', fill: '#009B3A' },
      { d: 'M0 0l320 240L640 0z', fill: '#000000' },
      { d: 'M0 480l320-240 320 240z', fill: '#000000' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FED100' }],
  },

  // Jordan
  JO: {
    name: 'Jordan',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#CE1126' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#007A3D' },
    ],
  },

  // Kazakhstan
  KZ: {
    name: 'Kazakhstan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#00AFCA' }],
    circles: [{ cx: 320, cy: 200, r: 80, fill: '#FEC50C' }],
  },

  // Kenya
  KE: {
    name: 'Kenya',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#000000' },
      { x: 0, y: 120, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 140, width: 640, height: 200, fill: '#BB0000' },
      { x: 0, y: 340, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#006600' },
    ],
  },

  // Kiribati
  KI: {
    name: 'Kiribati',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 280, fill: '#CE1126' },
      { x: 0, y: 280, width: 640, height: 40, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 40, fill: '#003F87' },
      { x: 0, y: 360, width: 640, height: 40, fill: '#FFFFFF' },
      { x: 0, y: 400, width: 640, height: 40, fill: '#003F87' },
      { x: 0, y: 440, width: 640, height: 40, fill: '#FFFFFF' },
    ],
  },

  // North Korea
  KP: {
    name: 'North Korea',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 60, fill: '#024FA2' },
      { x: 0, y: 60, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 80, width: 640, height: 320, fill: '#ED1C27' },
      { x: 0, y: 400, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 420, width: 640, height: 60, fill: '#024FA2' },
    ],
    circles: [{ cx: 160, cy: 240, r: 80, fill: '#FFFFFF' }],
  },

  // Kosovo
  XK: {
    name: 'Kosovo',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#244AA5' }],
  },

  // Kuwait
  KW: {
    name: 'Kuwait',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l160 240L0 480z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#007A3D' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#CE1126' },
    ],
  },

  // Kyrgyzstan
  KG: {
    name: 'Kyrgyzstan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#E8112D' }],
    circles: [{ cx: 320, cy: 240, r: 100, fill: '#FFEF00' }],
  },

  // Laos
  LA: {
    name: 'Laos',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#CE1126' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#002868' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#CE1126' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#FFFFFF' }],
  },

  // Latvia
  LV: {
    name: 'Latvia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 192, fill: '#9E3039' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 0, y: 288, width: 640, height: 192, fill: '#9E3039' },
    ],
  },

  // Lebanon
  LB: {
    name: 'Lebanon',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#ED1C24' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#ED1C24' },
    ],
  },

  // Lesotho
  LS: {
    name: 'Lesotho',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#00209F' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#009543' },
    ],
  },

  // Liberia
  LR: {
    name: 'Liberia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 44, fill: '#BF0A30' },
      { x: 0, y: 44, width: 640, height: 44, fill: '#FFFFFF' },
      { x: 0, y: 88, width: 640, height: 44, fill: '#BF0A30' },
      { x: 0, y: 132, width: 640, height: 44, fill: '#FFFFFF' },
      { x: 0, y: 176, width: 640, height: 44, fill: '#BF0A30' },
      { x: 0, y: 220, width: 640, height: 44, fill: '#FFFFFF' },
      { x: 0, y: 264, width: 640, height: 44, fill: '#BF0A30' },
      { x: 0, y: 308, width: 640, height: 44, fill: '#FFFFFF' },
      { x: 0, y: 352, width: 640, height: 44, fill: '#BF0A30' },
      { x: 0, y: 396, width: 640, height: 44, fill: '#FFFFFF' },
      { x: 0, y: 440, width: 640, height: 40, fill: '#BF0A30' },
      { x: 0, y: 0, width: 220, height: 220, fill: '#002868' },
    ],
  },

  // Libya
  LY: {
    name: 'Libya',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#E70013' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#000000' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#239E46' },
    ],
  },

  // Liechtenstein
  LI: {
    name: 'Liechtenstein',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#002B7F' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#CE1126' },
    ],
  },

  // Lithuania
  LT: {
    name: 'Lithuania',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FDB913' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#006A44' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#C1272D' },
    ],
  },

  // Luxembourg
  LU: {
    name: 'Luxembourg',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#ED2939' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#00A1DE' },
    ],
  },

  // Macau
  MO: {
    name: 'Macau',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#00785E' }],
  },

  // North Macedonia
  MK: {
    name: 'North Macedonia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#D20000' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#FFE600' },
      { x: 280, y: 0, width: 80, height: 480, fill: '#FFE600' },
    ],
    circles: [{ cx: 320, cy: 240, r: 60, fill: '#FFE600' }],
  },

  // Madagascar
  MG: {
    name: 'Madagascar',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 480, height: 240, fill: '#FC3D32' },
      { x: 160, y: 240, width: 480, height: 240, fill: '#007E3A' },
    ],
  },

  // Malawi
  MW: {
    name: 'Malawi',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#339E35' },
    ],
  },

  // Maldives
  MV: {
    name: 'Maldives',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#D21034' },
      { x: 120, y: 90, width: 400, height: 300, fill: '#007E3A' },
    ],
  },

  // Mali
  ML: {
    name: 'Mali',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#14B53A' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FCD116' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#CE1126' },
    ],
  },

  // Malta
  MT: {
    name: 'Malta',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 320, height: 480, fill: '#FFFFFF' },
      { x: 320, y: 0, width: 320, height: 480, fill: '#CF142B' },
    ],
  },

  // Mauritania
  MR: {
    name: 'Mauritania',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 60, fill: '#D01C1F' },
      { x: 0, y: 60, width: 640, height: 360, fill: '#00A95C' },
      { x: 0, y: 420, width: 640, height: 60, fill: '#D01C1F' },
    ],
  },

  // Mauritius
  MU: {
    name: 'Mauritius',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#EA2839' },
      { x: 0, y: 120, width: 640, height: 120, fill: '#1A206D' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#FFD500' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#00A551' },
    ],
  },

  // Moldova
  MD: {
    name: 'Moldova',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#003DA5' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFD200' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#CC092F' },
    ],
  },

  // Monaco
  MC: {
    name: 'Monaco',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#CE1126' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#FFFFFF' },
    ],
  },

  // Mongolia
  MN: {
    name: 'Mongolia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#C4272F' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#015197' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#C4272F' },
    ],
  },

  // Montenegro
  ME: {
    name: 'Montenegro',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#C40308' },
      { x: 20, y: 20, width: 600, height: 440, fill: '#C40308' },
    ],
  },

  // Morocco
  MA: {
    name: 'Morocco',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#C1272D' }],
  },

  // Mozambique
  MZ: {
    name: 'Mozambique',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l240 240L0 480z', fill: '#D21034' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#009A44' },
      { x: 0, y: 160, width: 640, height: 16, fill: '#FFFFFF' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#000000' },
      { x: 0, y: 304, width: 640, height: 16, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#FCE100' },
    ],
  },

  // Myanmar
  MM: {
    name: 'Myanmar',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FECB00' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#34B233' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#EA2839' },
    ],
  },

  // Namibia
  NA: {
    name: 'Namibia',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480H0z', fill: '#003580' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#009A44' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#FFFFFF' },
    ],
    circles: [{ cx: 160, cy: 160, r: 60, fill: '#FFE700' }],
  },

  // Nauru
  NR: {
    name: 'Nauru',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#002B7F' },
      { x: 0, y: 220, width: 640, height: 40, fill: '#FFC61E' },
    ],
  },

  // Nepal
  NP: {
    name: 'Nepal',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 0l320 240L0 480z', fill: '#003893' },
      { d: 'M20 20l260 220L20 460z', fill: '#DC143C' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' }],
  },

  // Nicaragua
  NI: {
    name: 'Nicaragua',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#0067C6' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0067C6' },
    ],
  },

  // Niger
  NE: {
    name: 'Niger',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#E05206' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0DB02B' },
    ],
    circles: [{ cx: 320, cy: 240, r: 50, fill: '#E05206' }],
  },

  // Oman
  OM: {
    name: 'Oman',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#DB161B' },
      { x: 160, y: 0, width: 480, height: 160, fill: '#FFFFFF' },
      { x: 160, y: 160, width: 480, height: 160, fill: '#DB161B' },
      { x: 160, y: 320, width: 480, height: 160, fill: '#008000' },
    ],
  },

  // Palau
  PW: {
    name: 'Palau',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#4AADD6' }],
    circles: [{ cx: 280, cy: 240, r: 120, fill: '#FFDE00' }],
  },

  // Palestine
  PS: {
    name: 'Palestine',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l240 240L0 480z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#007A3D' },
    ],
  },

  // Panama
  PA: {
    name: 'Panama',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 320, height: 240, fill: '#FFFFFF' },
      { x: 320, y: 0, width: 320, height: 240, fill: '#DA121A' },
      { x: 0, y: 240, width: 320, height: 240, fill: '#072357' },
      { x: 320, y: 240, width: 320, height: 240, fill: '#FFFFFF' },
    ],
  },

  // Papua New Guinea
  PG: {
    name: 'Papua New Guinea',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480H0z', fill: '#000000' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#CE1126' }],
  },

  // Paraguay
  PY: {
    name: 'Paraguay',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#D52B1E' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0038A8' },
    ],
  },

  // Peru
  PE: {
    name: 'Peru',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#D91023' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#D91023' },
    ],
  },

  // Qatar
  QA: {
    name: 'Qatar',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 480, height: 480, fill: '#8D1B3D' },
    ],
  },

  // Rwanda
  RW: {
    name: 'Rwanda',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#00A1DE' },
      { x: 0, y: 240, width: 640, height: 120, fill: '#FAD201' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#20603D' },
    ],
  },

  // Saint Kitts and Nevis
  KN: {
    name: 'Saint Kitts and Nevis',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480M0 480L640 0', fill: 'none' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#009E49' }],
  },

  // Saint Lucia
  LC: {
    name: 'Saint Lucia',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M320 100l120 280H200z', fill: '#FFFFFF' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#65CFFF' }],
  },

  // Saint Vincent and the Grenadines
  VC: {
    name: 'Saint Vincent and the Grenadines',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 160, height: 480, fill: '#0072C6' },
      { x: 160, y: 0, width: 320, height: 480, fill: '#FFD100' },
      { x: 480, y: 0, width: 160, height: 480, fill: '#009E60' },
    ],
  },

  // Samoa
  WS: {
    name: 'Samoa',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#CE1126' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#002B7F' },
    ],
  },

  // San Marino
  SM: {
    name: 'San Marino',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#73C2FB' },
    ],
  },

  // Sao Tome and Principe
  ST: {
    name: 'Sao Tome and Principe',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l160 240L0 480z', fill: '#D21034' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#12AD2B' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFCE00' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#12AD2B' },
    ],
  },

  // Senegal
  SN: {
    name: 'Senegal',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#00853F' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FDEF42' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#E31B23' },
    ],
  },

  // Serbia
  RS: {
    name: 'Serbia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#C6363C' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0C4076' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#FFFFFF' },
    ],
  },

  // Seychelles
  SC: {
    name: 'Seychelles',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 480l640-240V0H0z', fill: '#003F87' },
      { d: 'M0 480l640-160V0L0 320z', fill: '#FCD856' },
      { d: 'M0 480l640-80V0L0 160z', fill: '#D62828' },
      { d: 'M0 480l640 0V0L0 80z', fill: '#FFFFFF' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#007A3D' }],
  },

  // Sierra Leone
  SL: {
    name: 'Sierra Leone',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#1EB53A' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#0072C6' },
    ],
  },

  // Slovakia
  SK: {
    name: 'Slovakia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0B4EA2' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#EE1C25' },
    ],
  },

  // Slovenia
  SI: {
    name: 'Slovenia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#0000FF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#FF0000' },
    ],
  },

  // Solomon Islands
  SB: {
    name: 'Solomon Islands',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480H0z', fill: '#0051BA' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#009E49' },
      { x: 0, y: 220, width: 640, height: 40, fill: '#FCD116' },
    ],
  },

  // Somalia
  SO: {
    name: 'Somalia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#4189DD' }],
  },

  // South Sudan
  SS: {
    name: 'South Sudan',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l200 240L0 480z', fill: '#0F47AF' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#000000' },
      { x: 0, y: 120, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 140, width: 640, height: 200, fill: '#DA121A' },
      { x: 0, y: 340, width: 640, height: 20, fill: '#FFFFFF' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#078930' },
    ],
  },

  // Sri Lanka
  LK: {
    name: 'Sri Lanka',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 60, height: 480, fill: '#005F32' },
      { x: 60, y: 0, width: 60, height: 480, fill: '#FF7722' },
      { x: 120, y: 0, width: 520, height: 480, fill: '#8D153A' },
    ],
  },

  // Sudan
  SD: {
    name: 'Sudan',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l200 240L0 480z', fill: '#007229' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#D21034' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#000000' },
    ],
  },

  // Suriname
  SR: {
    name: 'Suriname',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 100, fill: '#377E3F' },
      { x: 0, y: 100, width: 640, height: 40, fill: '#FFFFFF' },
      { x: 0, y: 140, width: 640, height: 200, fill: '#B40A2D' },
      { x: 0, y: 340, width: 640, height: 40, fill: '#FFFFFF' },
      { x: 0, y: 380, width: 640, height: 100, fill: '#377E3F' },
    ],
  },

  // Syria
  SY: {
    name: 'Syria',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#000000' },
    ],
  },

  // Taiwan
  TW: {
    name: 'Taiwan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FE0000' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#000095' },
    ],
    circles: [{ cx: 160, cy: 120, r: 60, fill: '#FFFFFF' }],
  },

  // Tajikistan
  TJ: {
    name: 'Tajikistan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CC0000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#006600' },
    ],
  },

  // Tanzania
  TZ: {
    name: 'Tanzania',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 480M0 480L640 0', fill: 'none' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#1EB53A' },
      { x: 0, y: 0, width: 640, height: 240, fill: '#00A3DD' },
    ],
  },

  // Timor-Leste
  TL: {
    name: 'Timor-Leste',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 0l320 240L0 480z', fill: '#FFDF00' },
      { d: 'M0 0l200 240L0 480z', fill: '#000000' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#DC241F' }],
  },

  // Togo
  TG: {
    name: 'Togo',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 96, fill: '#006A4E' },
      { x: 0, y: 96, width: 640, height: 96, fill: '#FFCE00' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#006A4E' },
      { x: 0, y: 288, width: 640, height: 96, fill: '#FFCE00' },
      { x: 0, y: 384, width: 640, height: 96, fill: '#006A4E' },
      { x: 0, y: 0, width: 256, height: 288, fill: '#D21034' },
    ],
  },

  // Tonga
  TO: {
    name: 'Tonga',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#C10000' },
      { x: 0, y: 0, width: 256, height: 192, fill: '#FFFFFF' },
    ],
  },

  // Trinidad and Tobago
  TT: {
    name: 'Trinidad and Tobago',
    viewBox: '0 0 640 480',
    paths: [
      { d: 'M0 0l480 480h160L160 0z', fill: '#FFFFFF' },
      { d: 'M60 0l480 480h40L100 0z', fill: '#000000' },
    ],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#CE1126' }],
  },

  // Tunisia
  TN: {
    name: 'Tunisia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#E70013' }],
    circles: [
      { cx: 320, cy: 240, r: 100, fill: '#FFFFFF' },
      { cx: 340, cy: 240, r: 75, fill: '#E70013' },
    ],
  },

  // Turkmenistan
  TM: {
    name: 'Turkmenistan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#00843D' },
      { x: 80, y: 0, width: 120, height: 480, fill: '#CF3A32' },
    ],
  },

  // Tuvalu
  TV: {
    name: 'Tuvalu',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#75D5F7' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Uganda
  UG: {
    name: 'Uganda',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 80, fill: '#000000' },
      { x: 0, y: 80, width: 640, height: 80, fill: '#FCDC04' },
      { x: 0, y: 160, width: 640, height: 80, fill: '#D90000' },
      { x: 0, y: 240, width: 640, height: 80, fill: '#000000' },
      { x: 0, y: 320, width: 640, height: 80, fill: '#FCDC04' },
      { x: 0, y: 400, width: 640, height: 80, fill: '#D90000' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#FFFFFF' }],
  },

  // Uruguay
  UY: {
    name: 'Uruguay',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 53, width: 640, height: 53, fill: '#0038A8' },
      { x: 0, y: 106, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 159, width: 640, height: 53, fill: '#0038A8' },
      { x: 0, y: 212, width: 640, height: 54, fill: '#FFFFFF' },
      { x: 0, y: 266, width: 640, height: 54, fill: '#0038A8' },
      { x: 0, y: 320, width: 640, height: 53, fill: '#FFFFFF' },
      { x: 0, y: 373, width: 640, height: 53, fill: '#0038A8' },
      { x: 0, y: 426, width: 640, height: 54, fill: '#FFFFFF' },
      { x: 0, y: 0, width: 266, height: 266, fill: '#FFFFFF' },
    ],
    circles: [{ cx: 133, cy: 133, r: 60, fill: '#FCD116' }],
  },

  // Uzbekistan
  UZ: {
    name: 'Uzbekistan',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 150, fill: '#0099B5' },
      { x: 0, y: 150, width: 640, height: 15, fill: '#CE1126' },
      { x: 0, y: 165, width: 640, height: 150, fill: '#FFFFFF' },
      { x: 0, y: 315, width: 640, height: 15, fill: '#CE1126' },
      { x: 0, y: 330, width: 640, height: 150, fill: '#1EB53A' },
    ],
  },

  // Vanuatu
  VU: {
    name: 'Vanuatu',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l200 240L0 480z', fill: '#000000' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#D21034' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#009543' },
    ],
  },

  // Vatican City
  VA: {
    name: 'Vatican City',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 320, height: 480, fill: '#FFE000' },
      { x: 320, y: 0, width: 320, height: 480, fill: '#FFFFFF' },
    ],
  },

  // Venezuela
  VE: {
    name: 'Venezuela',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#FFCC00' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#00247D' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#CF142B' },
    ],
  },

  // Yemen
  YE: {
    name: 'Yemen',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#CE1126' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#000000' },
    ],
  },

  // Zambia
  ZM: {
    name: 'Zambia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#198A00' },
      { x: 380, y: 280, width: 60, height: 200, fill: '#EF7D00' },
      { x: 440, y: 280, width: 60, height: 200, fill: '#000000' },
      { x: 500, y: 280, width: 60, height: 200, fill: '#DE2010' },
    ],
  },

  // Zimbabwe
  ZW: {
    name: 'Zimbabwe',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l213 240L0 480z', fill: '#FFFFFF' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 69, fill: '#006400' },
      { x: 0, y: 69, width: 640, height: 69, fill: '#FFD200' },
      { x: 0, y: 138, width: 640, height: 69, fill: '#D40000' },
      { x: 0, y: 207, width: 640, height: 66, fill: '#000000' },
      { x: 0, y: 273, width: 640, height: 69, fill: '#D40000' },
      { x: 0, y: 342, width: 640, height: 69, fill: '#FFD200' },
      { x: 0, y: 411, width: 640, height: 69, fill: '#006400' },
    ],
  },

  // American Samoa
  AS: {
    name: 'American Samoa',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l640 240L0 480z', fill: '#002868' }],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#BF0A30' }],
  },

  // Anguilla
  AI: {
    name: 'Anguilla',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Aruba
  AW: {
    name: 'Aruba',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#418FDE' },
      { x: 0, y: 320, width: 640, height: 30, fill: '#FBE870' },
      { x: 0, y: 360, width: 640, height: 30, fill: '#FBE870' },
    ],
  },

  // Bermuda
  BM: {
    name: 'Bermuda',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#CF142B' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // British Virgin Islands
  VG: {
    name: 'British Virgin Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Cayman Islands
  KY: {
    name: 'Cayman Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Cook Islands
  CK: {
    name: 'Cook Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Falkland Islands
  FK: {
    name: 'Falkland Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Faroe Islands
  FO: {
    name: 'Faroe Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#005EB8' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#005EB8' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#EF303E' },
      { x: 184, y: 0, width: 80, height: 480, fill: '#EF303E' },
    ],
  },

  // French Guiana
  GF: {
    name: 'French Guiana',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // French Polynesia
  PF: {
    name: 'French Polynesia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 120, fill: '#CE1126' },
      { x: 0, y: 120, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 360, width: 640, height: 120, fill: '#CE1126' },
    ],
  },

  // Gibraltar
  GI: {
    name: 'Gibraltar',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 320, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#DA000C' },
    ],
  },

  // Greenland
  GL: {
    name: 'Greenland',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 240, fill: '#FFFFFF' },
      { x: 0, y: 240, width: 640, height: 240, fill: '#D00C33' },
    ],
    circles: [
      { cx: 240, cy: 240, r: 120, fill: '#D00C33' },
      { cx: 240, cy: 240, r: 80, fill: '#FFFFFF' },
    ],
  },

  // Grenada
  GD: {
    name: 'Grenada',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#CE1126' },
      { x: 60, y: 60, width: 520, height: 360, fill: '#007A5E' },
    ],
  },

  // Guadeloupe
  GP: {
    name: 'Guadeloupe',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Guam
  GU: {
    name: 'Guam',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#002868' },
      { x: 20, y: 20, width: 600, height: 440, fill: '#BE0027' },
    ],
  },

  // Marshall Islands
  MH: {
    name: 'Marshall Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#003893' }],
  },

  // Martinique
  MQ: {
    name: 'Martinique',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Micronesia
  FM: {
    name: 'Micronesia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#6797B5' }],
  },

  // Montserrat
  MS: {
    name: 'Montserrat',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // New Caledonia
  NC: {
    name: 'New Caledonia',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Puerto Rico
  PR: {
    name: 'Puerto Rico',
    viewBox: '0 0 640 480',
    paths: [{ d: 'M0 0l320 240L0 480z', fill: '#002868' }],
    rects: [
      { x: 0, y: 0, width: 640, height: 96, fill: '#BF0A30' },
      { x: 0, y: 96, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#BF0A30' },
      { x: 0, y: 288, width: 640, height: 96, fill: '#FFFFFF' },
      { x: 0, y: 384, width: 640, height: 96, fill: '#BF0A30' },
    ],
  },

  // Reunion
  RE: {
    name: 'Reunion',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Turks and Caicos Islands
  TC: {
    name: 'Turks and Caicos Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // U.S. Virgin Islands
  VI: {
    name: 'U.S. Virgin Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' }],
  },

  // Ascension Island
  AC: {
    name: 'Ascension Island',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#002366' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Åland Islands
  AX: {
    name: 'Åland Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#0053A5' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#FFCD00' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#FFCD00' },
      { x: 0, y: 0, width: 160, height: 176, fill: '#D21034' },
    ],
  },

  // Saint Barthélemy
  BL: {
    name: 'Saint Barthélemy',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#002654' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#CE1126' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#FFD100' }],
  },

  // Bonaire, Sint Eustatius and Saba
  BQ: {
    name: 'Bonaire, Sint Eustatius and Saba',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#21468B' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#AE1C28' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#F9D616' }],
  },

  // Cocos (Keeling) Islands
  CC: {
    name: 'Cocos (Keeling) Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
    circles: [{ cx: 320, cy: 240, r: 120, fill: '#FFCC00' }],
  },

  // Curaçao
  CW: {
    name: 'Curaçao',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#002B7F' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#F9E814' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#002B7F' },
    ],
    circles: [{ cx: 320, cy: 240, r: 80, fill: '#FFFFFF' }],
  },

  // Christmas Island
  CX: {
    name: 'Christmas Island',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
    circles: [{ cx: 320, cy: 240, r: 120, fill: '#FFCC00' }],
  },

  // Western Sahara
  EH: {
    name: 'Western Sahara',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#000000' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#FFFFFF' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#C8102E' },
    ],
  },

  // Guernsey
  GG: {
    name: 'Guernsey',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#E8112D' },
      { x: 272, y: 0, width: 96, height: 480, fill: '#E8112D' },
      { x: 0, y: 0, width: 272, height: 192, fill: '#FCD116' },
    ],
  },

  // Isle of Man
  IM: {
    name: 'Isle of Man',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#CF142B' }],
  },

  // British Indian Ocean Territory
  IO: {
    name: 'British Indian Ocean Territory',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
    circles: [
      { cx: 320, cy: 120, r: 80, fill: '#FFCC00' },
      { cx: 320, cy: 360, r: 80, fill: '#FFCC00' },
    ],
  },

  // Jersey
  JE: {
    name: 'Jersey',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 192, width: 640, height: 96, fill: '#E8112D' },
      { x: 272, y: 0, width: 96, height: 480, fill: '#E8112D' },
      { x: 0, y: 0, width: 272, height: 192, fill: '#FCD116' },
    ],
  },

  // Saint Martin
  MF: {
    name: 'Saint Martin',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Northern Mariana Islands
  MP: {
    name: 'Northern Mariana Islands',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#002868' }],
  },

  // Norfolk Island
  NF: {
    name: 'Norfolk Island',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
    circles: [{ cx: 320, cy: 240, r: 120, fill: '#FFCC00' }],
  },

  // Niue
  NU: {
    name: 'Niue',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#FFD100' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Saint Pierre and Miquelon
  PM: {
    name: 'Saint Pierre and Miquelon',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Saint Helena
  SH: {
    name: 'Saint Helena',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Svalbard and Jan Mayen
  SJ: {
    name: 'Svalbard and Jan Mayen',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#EF2B2D' },
      { x: 0, y: 176, width: 640, height: 128, fill: '#FFFFFF' },
      { x: 160, y: 0, width: 128, height: 480, fill: '#FFFFFF' },
      { x: 0, y: 200, width: 640, height: 80, fill: '#002868' },
      { x: 184, y: 0, width: 80, height: 480, fill: '#002868' },
    ],
  },

  // Sint Maarten
  SX: {
    name: 'Sint Maarten',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 160, fill: '#AE1C28' },
      { x: 0, y: 160, width: 640, height: 160, fill: '#002B7F' },
      { x: 0, y: 320, width: 640, height: 160, fill: '#F9E814' },
    ],
  },

  // Tristan da Cunha
  TA: {
    name: 'Tristan da Cunha',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 640, height: 480, fill: '#012169' },
      { x: 0, y: 0, width: 320, height: 240, fill: '#012169' },
    ],
  },

  // Tokelau
  TK: {
    name: 'Tokelau',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [{ x: 0, y: 0, width: 640, height: 480, fill: '#00247D' }],
  },

  // Wallis and Futuna
  WF: {
    name: 'Wallis and Futuna',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },

  // Mayotte
  YT: {
    name: 'Mayotte',
    viewBox: '0 0 640 480',
    paths: [],
    rects: [
      { x: 0, y: 0, width: 213, height: 480, fill: '#002395' },
      { x: 213, y: 0, width: 214, height: 480, fill: '#FFFFFF' },
      { x: 427, y: 0, width: 213, height: 480, fill: '#ED2939' },
    ],
  },
}

/**
 * Check if a country has SVG flag data
 */
export function hasSvgFlag(country: CountryCode): boolean {
  return country in flagSvgPaths
}

/**
 * Get list of countries with SVG flags
 */
export function getCountriesWithSvgFlags(): CountryCode[] {
  return Object.keys(flagSvgPaths) as CountryCode[]
}
