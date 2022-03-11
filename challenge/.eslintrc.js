module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
  },
};
