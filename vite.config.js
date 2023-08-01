import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    context: {
      username: 'Vasya'
    }
  })],
});
