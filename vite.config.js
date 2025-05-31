import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LandingPage/', // Assure-toi que ce nom est exactement le même que ton repo sur GitHub
  plugins: [react()],
})
