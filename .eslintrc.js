/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
  ],
}
