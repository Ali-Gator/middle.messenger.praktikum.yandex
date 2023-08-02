import { resolve } from 'path';
import { defineConfig, Plugin } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { pageData } from './src/constants.ts';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, 'src/components'), resolve(__dirname, 'src/pages')],
      context(pagePath) {
        return pageData[pagePath];
      },
    }) as Plugin
  ],
});
