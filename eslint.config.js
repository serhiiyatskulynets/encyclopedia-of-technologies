import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist", "coverage", "playwright-report"]),

    {
        files: ["**/*.{js,jsx}"],
        extends: [
            js.configs.recommended,
            prettier,
        ],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
    },

    {
        files: ["src/**/*.{js,jsx}"],
        extends: [
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
    },

    {
        files: ["server/**/*.js"],
        languageOptions: {
            globals: globals.node,
        },
    },
]);
