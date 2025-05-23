import { defineConfig, mergeConfig } from "vite";
import { resolve } from "path";
import { __dirname } from "./shared.config";
import { sharedConfig } from "./shared.config";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    build: {
      outDir: "dist/filimo",
      rollupOptions: {
        input: resolve(__dirname, "../src/apps/filimo/index.ts"),
      },
    },
  })
);
