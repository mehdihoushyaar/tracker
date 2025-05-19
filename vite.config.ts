import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "src/shared"),
    },
  },
  build: {
    emptyOutDir: true,
    assetsInlineLimit: Infinity,
    minify: false,
    rollupOptions: {},
  },
});
