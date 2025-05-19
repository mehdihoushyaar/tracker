import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { build } from "vite";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appsRoot = resolve(__dirname, "src/apps");
const appDirs = fs
  .readdirSync(appsRoot)
  .filter((name) => fs.existsSync(resolve(appsRoot, name, "index.ts")));

async function buildApp(name, inputPath, outDir) {
  console.log(`\n building ${name}`);

  await build({
    configFile: resolve(__dirname, "vite.config.ts"),
    build: {
      emptyOutDir: true,
      assetsInlineLimit: Infinity,
      minify: false,
      rollupOptions: {
        input: inputPath,
        output: {
          dir: outDir,
          format: "es",
          entryFileNames: "index.js",
          inlineDynamicImports: true,
        },
      },
    },
  });
}

(async () => {
  for (const app of appDirs) {
    const entry = resolve(appsRoot, app, "index.ts");
    const outDir = resolve(__dirname, "dist", app);
    await buildApp(app, entry, outDir);
  }

  const sharedEntry = resolve(__dirname, "src/shared/index.ts");
  const sharedOut = resolve(__dirname, "dist/shared");
  await buildApp("shared", sharedEntry, sharedOut);

  console.log("\n All builds done!");
})();
