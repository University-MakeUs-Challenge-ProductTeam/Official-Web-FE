const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const importNamePlugin = require('eslint-plugin-import-name');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');

const importSortRules = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^\u0000'],
        ['^(assert|buffer|child_process|crypto|dns|events|fs|http|https|net|os|path|querystring|stream|tls|url|util|zlib)(/|$)'],
        ['^react', '^@?\w'],
        ['^@/types', '^@/constants'],
        ['^@/libs', '^@/utils'],
        ['^@/stores', '^@/hooks'],
        ['^@/components'],
        ['^\./', '^\.\./'],
        ['^.+\.svg$', '^.+\.json$'],
        ['^.+\.scss$', '^.+\.css$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};

module.exports = [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'public/**', 'next-env.d.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.flat.recommended,
  prettierConfig,
  {
    plugins: {
      'import': importPlugin,
      'import-name': importNamePlugin,
      'simple-import-sort': simpleImportSort,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/no-danger': 'off',
      'no-nested-ternary': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'either',
          depth: 25,
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/no-unused-state': 'warn',
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'warn',
      'react/no-array-index-key': 'off',
      'arrow-body-style': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-console': 'warn',
      'dot-notation': 'warn',
      'no-unused-vars': 'off',
      'import-name/all-imports-name': [
        'error',
        {
          clsx: 'cx',
        },
      ],
      ...importSortRules,
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/extensions': [
        'error',
        {
          ignorePackages: true,
          pattern: {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always',
          },
        },
      ],
      'import/order': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'no-void': ['error', { allowAsStatement: true }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['eslint.config.cjs'],
    rules: {
      'no-useless-escape': 'off',
    },
  },
];
