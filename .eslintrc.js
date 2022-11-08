module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "next/core-web-vitals",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Other rules
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
