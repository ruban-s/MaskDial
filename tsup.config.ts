import { defineConfig } from 'tsup'

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
  // UMD bundle for CDN (with libphonenumber-js bundled)
  {
    entry: { 'maskdial.umd': 'src/index.ts' },
    format: ['iife'],
    globalName: 'MaskDial',
    minify: true,
    sourcemap: true,
  },
])
