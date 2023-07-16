module.exports = {
  root: true,
  extends: ['@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-user-react': 1,
    'arrow-body-style': ['error']
  }
};
