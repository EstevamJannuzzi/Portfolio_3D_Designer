import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio_3D_Designer/', // 👈 ajuste obrigatório para GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ],
})
