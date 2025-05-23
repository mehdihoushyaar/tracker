import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const sharedConfig = defineConfig({
  esbuild: false,
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "../src/shared"),
    },
  },
  build: {
    emptyOutDir: true,
    assetsInlineLimit: Infinity,
    target: "es5",
    minify: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: "index.js",
      },
      plugins: [
        // babel({
        //   babelHelpers: "bundled",
        //   extensions: [".ts", ".js"],
        //   include: ["src/**/*.{ts,js}"],
        //   presets: [
        //     [
        //       "@babel/preset-env",
        //       {
        //         targets: { chrome: "30", ie: "11" },
        //         useBuiltIns: "usage",
        //         modules: false,
        //         corejs: 3,
        //       },
        //     ],
        //   ],
        // }),
      ],
    },
  },
});
