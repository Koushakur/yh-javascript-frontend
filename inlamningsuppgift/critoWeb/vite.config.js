import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@images': path.resolve(__dirname, 'src/assets/img'),
         '@components': path.resolve(__dirname, 'src/components')
      }
   }
})
