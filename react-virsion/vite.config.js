import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/React-Angular-Deploy/',
  resolve: {
    alias: {
      animejs: path.resolve(__dirname, 'src/shims/animejs-default.js'),
    },
  },
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
