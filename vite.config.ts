import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from  'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8000,
    host:'0.0.0.0'
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  plugins: [vue()],
})
