// Test setup for Vitest with jsdom

import { vi } from 'vitest'

// Mock requestAnimationFrame for cursor positioning tests
global.requestAnimationFrame = vi.fn((callback) => {
  callback(0)
  return 0
})

global.cancelAnimationFrame = vi.fn()
