
module.exports = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint",
    "react",
    "simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "semi": ["error", "always"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'indent': ['error',2,{'SwitchCase': 1}],
  },
};