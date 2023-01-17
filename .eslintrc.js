/* eslint-env node */
// @noflow
const createConfig = require('@uber/eslint-config');

module.exports = createConfig({
  overrides: [
    {
      files: ['**/*.test.js', '**/*.browser.js', '**/*.node.js'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      globals: {
        snap: 'readonly',
      },
    },
  ],
});
