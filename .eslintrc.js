module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', 'sonarjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:sonarjs/recommended',
    'eslint-config-prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-unused-expressions': ['error'],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'no-undef': ['error'],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
      },
    ],
    'no-console': ['warn'],
    '@typescript-eslint/no-empty-function': ['warn'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
