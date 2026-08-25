import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   host: '192.168.100.34',
  //   port: 5173, // Pastikan pakai port ini
  // }
}
)
