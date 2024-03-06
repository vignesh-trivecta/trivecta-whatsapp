import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), viteSingleFile()],
  plugins: [react()],
  base: './', // or the appropriate base path
  server: {
    host: '127.0.0.1'
  }
})
