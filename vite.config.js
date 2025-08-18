import { getViteConfig } from 'astro/config'

// https://docs.astro.build/en/guides/testing/#vitest
export default getViteConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    reporter: 'dot',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      enabled: true,
      exclude: [
        'dist',
        '.storybook',
        '.astro',
        '*.config.*{ts,js}*',
        'worker-configuration.d.ts',
        'src/actions/index.ts',
        'src/**/*.astro', // can't test Astro
        '**/*.stories.tsx' // Exclude all story files
      ]
    }
  }
})
