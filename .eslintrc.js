module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'es2020': true,
  },
  'extends': ['google'],
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'rules': {
    'semi': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
  },
};
