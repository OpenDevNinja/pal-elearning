import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Cela permet de lier à toutes les interfaces réseau
    port: 5174,
  },
  css: {
    modules: true, // Activer les modules CSS si nécessaire
},
})
