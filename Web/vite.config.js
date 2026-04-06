import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        apropos: resolve(__dirname, 'a-propos.html'),
        mentionslegales: resolve(__dirname, 'mentions-legales.html'),
        confidentialite: resolve(__dirname, 'confidentialite.html'),
        cgv: resolve(__dirname, 'cgv.html'),
      },
    },
  },
})
