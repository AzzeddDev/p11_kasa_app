import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p11_kasa_app/',
  server: {
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ["**/*.json"],
})
