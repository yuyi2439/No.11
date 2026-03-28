import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [
    svelte(),
    viteSingleFile()
  ],

  // 关键：相对路径，让双击能打开
  base: './',

  build: {
    // 禁止代码分割，全部打进一个文件
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        // 打包成浏览器直接运行的格式
        format: 'iife'
      }
    }
  }
})