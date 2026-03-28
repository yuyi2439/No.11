import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000,
    open: true
  },

  base: process.env.BUILD_FOR_GITHUB == 'true'
      ? '/No.11/'
      : './',
})