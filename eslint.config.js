const path = require("path");
const globals = require("globals");
const tailwind = require("eslint-plugin-tailwindcss");
const astro = require("eslint-plugin-astro");
const parser = require("astro-eslint-parser");

module.exports = [
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astro,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.astro"],
    rules: {
      // TypeScript - Imports & Exports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      "@typescript-eslint/no-namespace": "off",
      // TypeScript - Variables & Usage
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          vars: "all",
          args: "all",
          varsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      "prefer-const": "error",
      "no-var": "error",
      // TypeScript - Code Quality
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-empty-interface": "error",
      // JavaScript - Best Practices
      "no-console": "warn",
      "no-unreachable": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "no-lonely-if": "error",
      "no-useless-catch": "error",
      "consistent-return": "warn",
      // Tailwind
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
      "tailwindcss/enforces-shorthand": "error",
    },
  },
  {
    settings: {
      tailwindcss: {
        config: path.join(__dirname, "./tailwind.config.mjs"),
      },
    },
  },
  {
    ignores: ["**/dist/**", "**/node_modules/**"],
  },
];
