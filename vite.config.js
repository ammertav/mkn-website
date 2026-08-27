import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],

  // server: {
  //   host: '192.168.100.34',
  //   port: 5173, // Pastikan pakai port ini
  // }
}
)
