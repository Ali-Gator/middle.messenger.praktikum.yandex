import { resolve } from 'path';
import { defineConfig, Plugin } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { pageData } from './src/constants.ts';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        chat: resolve(__dirname, 'src/pages/chat/chat.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
        register: resolve(__dirname, 'src/pages/register/register.html'),
        profile: resolve(__dirname, 'src/pages/profile/profile.html'),
        500: resolve(__dirname, 'src/pages/500/500.html'),
        400: resolve(__dirname, 'src/pages/400/400.html'),
      }
    }
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, 'src/components'), resolve(__dirname, 'src/modules')],
      context(pagePath) {
        return pageData[pagePath];
      },
    }) as unknown as Plugin
  ],
});
