import { getViteConfig } from 'astro/config'

// https://docs.astro.build/en/guides/testing/#vitest
export default getViteConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    reporter: 'dot',
    setupFiles: ['./vitest.setup.ts'],
    coverage: { enabled: true }
  }
})
