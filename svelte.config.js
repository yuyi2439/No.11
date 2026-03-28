import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),

  vite: {
    base: process.env.BUILD_FOR_GITHUB === 'true'
      ? '/No.11/'
      : '/'
  }
}
