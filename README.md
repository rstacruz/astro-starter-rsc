# astro-starter-rsc

I often use Astro to prototype new ideas, but I find myself adding the same integrations over and over.
This starter is a collection of my favorite integrations.

- [Astro](https://astro.build)
- TypeScript
- Tailwind
- Vitest
- Eslint
- Prettier
- pnpm
- GitHub Actions
- Testing Library
- ~~Playwright~~ (coming soon)
- ~~Storybook~~ (coming soon)

## Ideas on how to use this

There are a few ways I can think this repo can be useful:

* Use this as is. I chose the defaults to be as reasonable as possible to modern React projects. Try it with `npx tiged github:rstacruz/astro-starter-rsc <project-name>`.

* Remove integrations you don't need. Don't need Tailwind? Search the codebase (`git grep tailwind` and `git ls-files | grep tailwind`) and remove those references.

* Use it as a reference. Need to integrate Testing Library into your own Astro project? Search this codebase like above and see how I did it.

## Getting started

```sh
# to enable pnpm: corepack enable pnpm
pnpm install
pnpm dev
open http://localhost:4321/
```

