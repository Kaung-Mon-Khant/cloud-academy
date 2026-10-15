import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    port: 5173,
    // Same-origin in dev too: the browser calls /api and Vite forwards it to Fastify.
    proxy: { '/api': 'http://localhost:4000' },
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router'],
          vendor: ['@tanstack/react-query', 'i18next', 'react-i18next', 'motion', 'zustand'],
        },
      },
    },
  },
});
