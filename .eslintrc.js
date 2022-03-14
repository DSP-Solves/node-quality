module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    singleQuote: 0,
    "arrow-parens": "error",
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "max-lines": [
      "error",
      { max: 400, skipComments: true, skipBlankLines: true },
    ],
    "max-lines-per-function": [
      "warn",
      { max: 20, skipComments: true, skipBlankLines: true },
    ],
    "max-params": ["error", { max: 3 }],
    complexity: ["warn", { max: 10 }],
    "consistent-return": "error",
    "no-else-return": ["error", { allowElseIf: false }],
  },
};
