import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@icons": "/src/assets/icons",
      "@images": "/src/assets/images",
      "@ui": "/src/components/ui",
      "@components": "/src/components",
      "@layouts": "/src/layouts",
    },
  },
});
