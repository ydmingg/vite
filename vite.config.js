import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
        //   targets: ['defaults', 'not IE 11'], // 只要没有兼容问题，就不要配置
        
    }),
      
  ],
})