module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort", "import", "prettier"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-children-prop": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
