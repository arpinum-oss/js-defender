module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: { "@typescript-eslint/no-explicit-any": "off" },
  ignorePatterns: ["build", "coverage", ".eslintrc.js"],
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
      rules: { "@typescript-eslint/no-var-requires": "off" },
    },
  ],
};
