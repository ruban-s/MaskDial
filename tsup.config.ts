import { defineConfig } from 'tsup'
import pkg from './package.json'

const version = pkg.version

export default defineConfig([
  // Vanilla JS - ESM + CJS
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['libphonenumber-js'],
  },
  // jQuery plugin - ESM + CJS
  {
    entry: { jquery: 'src/jquery.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['jquery', 'libphonenumber-js'],
  },
  // React adapter - ESM + CJS
  {
    entry: { 'react/index': 'src/adapters/react/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom', 'libphonenumber-js'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Vue adapter - ESM + CJS
  {
    entry: { 'vue/index': 'src/adapters/vue/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['vue', 'libphonenumber-js'],
  },
  // Zod validator - ESM + CJS
  {
    entry: { 'validators/zod': 'src/validators/zod.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['zod', 'libphonenumber-js'],
  },
  // Yup validator - ESM + CJS
  {
    entry: { 'validators/yup': 'src/validators/yup.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['yup', 'libphonenumber-js'],
  },
  // Accessibility utilities - ESM + CJS
  {
    entry: { 'a11y/index': 'src/a11y/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
  },
  // Country data - ESM + CJS
  {
    entry: { 'components/CountryData': 'src/components/CountryData.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['libphonenumber-js'],
  },
  // SVG Flags - ESM + CJS
  {
    entry: { 'components/flags/index': 'src/components/flags/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['react', 'libphonenumber-js'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // UMD bundle for CDN - non-minified
  {
    entry: { [`maskdial-${version}.umd`]: 'src/index.ts' },
    format: ['iife'],
    globalName: 'MaskDial',
    target: 'es2017',
    minify: false,
    sourcemap: true,
    outExtension: () => ({ js: '.js' }),
  },
  // UMD bundle for CDN - minified
  {
    entry: { [`maskdial-${version}.umd.min`]: 'src/index.ts' },
    format: ['iife'],
    globalName: 'MaskDial',
    target: 'es2017',
    minify: true,
    sourcemap: true,
    outExtension: () => ({ js: '.js' }),
  },
  // jQuery UMD bundle for CDN - non-minified
  {
    entry: { [`maskdial-${version}.jquery.umd`]: 'src/jquery.ts' },
    format: ['iife'],
    globalName: 'MaskDialJQuery',
    target: 'es2017',
    minify: false,
    sourcemap: true,
    external: ['jquery'],
    outExtension: () => ({ js: '.js' }),
  },
  // jQuery UMD bundle for CDN - minified
  {
    entry: { [`maskdial-${version}.jquery.umd.min`]: 'src/jquery.ts' },
    format: ['iife'],
    globalName: 'MaskDialJQuery',
    target: 'es2017',
    minify: true,
    sourcemap: true,
    external: ['jquery'],
    outExtension: () => ({ js: '.js' }),
  },
])
