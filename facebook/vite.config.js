import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@svgr/rollup';

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
  ],
});
