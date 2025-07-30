import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        higher: ['higher-jump.regular', 'cursive'],
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
