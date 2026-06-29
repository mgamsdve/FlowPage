import { dirname, resolve, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlInputs = Object.fromEntries(
  readdirSync(__dirname)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [parse(file).name.replace(/[^a-z0-9]/gi, ''), resolve(__dirname, file)]),
)

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: htmlInputs,
    },
  },
})
