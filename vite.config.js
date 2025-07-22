// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- This line is key

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Call the plugin
  ],
  // Ensure no conflicting css.postcss block for simple setup
});