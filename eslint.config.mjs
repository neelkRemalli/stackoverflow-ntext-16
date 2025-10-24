import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import prettier from 'eslint-config-prettier'


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  tailwindPlugin.configs.recommended,
  prettier,
 
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
