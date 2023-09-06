module.exports = {
  root: true,
  "env": {
    "es2021": true,
    "node": true,
    "browser": true,
    "jest": true,
    "react-native/react-native": true
  },
  extends: [
    "eslint:recommended",
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ['prettier',
    '@typescript-eslint',
    "import",
    "react",
    "react-native",
    "unused-imports"],
  ignorePatterns: [
    // Defines patterns for files and directories to be ignored by ESLint. Files and directories matching these patterns will not be checked by ESLint
    '__tests__/',
    'build/',
    'node_modules',
    'output',
    'public',
    'src/api/',
    'src/assets/',
    'metro.config.js',
    'babel.config.js',
    'commitlint.config.js',
    'jest.config.tsx',
    '.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Provides options for the parser. Here, it sets the ECMAScript version to 2021, enables the parsing of JSX syntax, and sets the source type to 'module' to support ES modules
    "ecmaVersion": "latest",
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-uses-react': 1,
    'arrow-body-style': ['error'],
    "arrow-body-style": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': 'off',
    'no-tabs': 'off',
    "no-unused-vars": 'off',
    // "@typescript-eslint/no-unused-vars": "error",
    'max-len': ['error', { code: 300 }],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never', // Disallow file extension for TypeScript files
        tsx: 'never',
        js: 'never',
        jsz: 'never'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'] // Allow JSX in TypeScript files with the '.tsx' extension
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function' // Allow arrow function syntax for function components
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "detect"
    }
  }
};
