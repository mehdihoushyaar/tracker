import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import boundaries from "eslint-plugin-boundaries";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: { js, boundaries },
    rules: {
      "no-console": "warn",
      "boundaries/element-types": [
        2,
        {
          default: "disallow",
          rules: [
            { from: "aparat", allow: ["aparat", "shared"] },
            { from: "filimo", allow: ["filimo", "shared"] },
            { from: "shared", allow: ["shared"] },
          ],
        },
      ],
    },
    settings: {
      "boundaries/include": ["src/**/*.{js,mjs,cjs}"],
      "boundaries/elements": [
        { type: "aparat", pattern: "src/apps/aparat/**" },
        { type: "filimo", pattern: "src/apps/filimo/**" },
        { type: "shared", pattern: "src/shared/**" },
      ],
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      boundaries,
    },
    extends: ["@typescript-eslint/recommended"],
    settings: {
      "boundaries/include": ["src/**/*.{ts,tsx}"],
      "boundaries/elements": [
        { type: "aparat", pattern: "src/apps/aparat/**" },
        { type: "filimo", pattern: "src/apps/filimo/**" },
        { type: "shared", pattern: "src/shared/**" },
      ],
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "boundaries/element-types": [
        2,
        {
          default: "disallow",
          rules: [
            { from: "aparat", allow: ["aparat", "shared"] },
            { from: "filimo", allow: ["filimo", "shared"] },
            { from: "shared", allow: ["shared"] },
          ],
        },
      ],
    },
  },
]);
