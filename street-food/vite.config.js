import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/orders': 'http://localhost:3000',
      '/inventory': 'http://localhost:3000'
    },
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Enable SPA fallback for React Router
  build: {
    rollupOptions: {
      input: 'App.jsx'
    }
  }
})
