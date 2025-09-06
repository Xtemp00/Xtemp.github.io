// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // ⚠️ si publié sur user.github.io/repo-name :
  base: '/Xtemp.github.io/',   // remplace par le vrai nom du dépôt
})
