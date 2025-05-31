import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  server: {
    port: 3003,
    host: 'front.server.com',
  },
  build: {
    outDir: 'build',
  },
});

