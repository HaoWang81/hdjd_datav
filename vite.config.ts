import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from  'path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'dist'
  },
  base:"./",
  server:{
    port:8000,
    host:'0.0.0.0',
    proxy:{
      '/api':{
        target: "http://192.168.1.9:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  plugins: [vue()],
})
