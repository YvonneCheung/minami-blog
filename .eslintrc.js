module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    eqeqeq: 'off',
    indent: 'off',
    'no-eval': 'off', // 禁止使用eval
    'no-undef': 'off', // 不能有未定义的变量
    'no-unused-vars': 'off',
    "prefer-const":false
  },
  plugins: ['vue', 'prettier','stylelint-prettier'],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
