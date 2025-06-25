import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '^/api/': process.env.VITE_API_BASE_URL || 'http://localhost:8080/',
    },
    host: '0.0.0.0',
    port: 3300,
  },
});
