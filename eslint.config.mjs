// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise";
import pluginReact from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: { ...globals.browser, ...globals.node }
        }
    },
    {
        settings: {
            react: {
                version: "detect"
            }
        }
    }, // ? https://github.com/eslint/eslint
    pluginJs.configs.recommended, // ? https://github.com/import-js/eslint-plugin-import
    importPlugin.flatConfigs.recommended, // ? https://github.com/typescript-eslint/typescript-eslint
    ...tseslint.configs.recommended, // ? https://github.com/eslint-community/eslint-plugin-promise
    pluginPromise.configs["flat/recommended"], // ? https://github.com/jsx-eslint/eslint-plugin-react
    pluginReact.configs.flat.recommended, // ? https://github.com/jsx-eslint/eslint-plugin-react
    pluginReact.configs.flat["jsx-runtime"], // ? https://github.com/prettier/eslint-config-prettier
    eslintConfigPrettier,
    {
        rules: {
            "no-unused-vars": "off",
            "react/react-in-jsx-scope": "off", // Next.js не требует импорта React
            "react/prop-types": "off", // TypeScript покрывает проверку типов
            "react/jsx-props-no-spreading": "off",
            "react/jsx-key": "error",
            "react/jsx-no-duplicate-props": "error",
            "react/jsx-no-undef": "error",
            "react/jsx-uses-react": "off",
            "react/jsx-uses-vars": "error",
            "react/no-array-index-key": "warn",
            "react/no-danger": "warn",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "error",
            "react/no-unused-state": "warn",
            "react/prefer-stateless-function": "warn",
            "react/self-closing-comp": "error",
            "newline-before-return": "error",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "import/no-unresolved": "off",
            "import/no-named-as-default": "off",
            "import/no-cycle": "error",
            "import/no-self-import": "error",
            "import/no-useless-path-segments": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_"
                }
            ]
        }
    },
    {
        plugins: {
            "@next/next": nextPlugin,
            "unused-imports": unusedImports
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            "@next/next/no-img-element": "off"
        }
    },
    {
        ignores: [".next/*"]
    },
    ...storybook.configs["flat/recommended"]
];
