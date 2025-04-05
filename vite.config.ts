import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
    host: 'front.server.com',
  },
  build: {
    outDir: 'build',
  },
});
