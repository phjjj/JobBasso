import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        console: 'readonly',
        process: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      react: react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // ===== AIRBNB JAVASCRIPT STYLE GUIDE 완전 적용 =====

      // 🎨 코드 스타일 (Code Style)
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'eol-last': ['error', 'always'],
      'max-len': [
        'error',
        { code: 100, ignoreUrls: true, ignoreStrings: true },
      ],
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'keyword-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // 🔧 변수 및 함수 (Variables & Functions)
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off', // TypeScript가 처리
      'no-undef': 'off', // TypeScript가 처리
      camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
      'func-names': 'warn',
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: true },
      ],
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': [
        'error',
        'as-needed',
        { requireReturnForObjectLiteral: false },
      ],

      // 📦 객체 및 배열 (Objects & Arrays)
      'object-shorthand': [
        'error',
        'always',
        { ignoreConstructors: false, avoidQuotes: true },
      ],
      'quote-props': [
        'error',
        'as-needed',
        { keywords: false, unnecessary: true, numbers: false },
      ],
      'no-array-constructor': 'error',
      'array-callback-return': ['error', { allowImplicit: true }],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
      ],

      // 🎯 조건문 및 비교 (Conditionals & Comparison)
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['/', '*'],
            ['&', '|', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!=='],
            ['&&', '||'],
          ],
          allowSamePrecedence: false,
        },
      ],

      // 🚫 금지된 패턴들 (Disallowed Patterns)
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-proto': 'error',
      'no-iterator': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
        },
      ],

      // ===== IMPORT 관련 룰들 =====
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off', // TypeScript가 처리
      'import/extensions': 'off', // TypeScript가 처리
      'import/prefer-default-export': 'off', // Next.js에서는 named export도 많이 사용

      // ===== REACT 관련 룰들 =====
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off', // Next.js에서는 불필요
      'react/prop-types': 'off', // TypeScript 사용시 불필요
      'react/jsx-props-no-spreading': 'off', // 때로는 필요함
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-uses-react': 'off', // Next.js에서는 불필요
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-max-props-per-line': [
        'error',
        { maximum: 1, when: 'multiline' },
      ],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-boolean-value': ['error', 'never', { always: [] }],
      'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-no-bind': [
        'error',
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-no-literals': 'off',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
      'react/jsx-sort-props': 'off',
      'react/jsx-key': 'error',

      // ===== REACT HOOKS 룰들 =====
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ===== 접근성 (A11Y) 룰들 =====
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': 'off', // 때로는 필요함
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
      'jsx-a11y/no-noninteractive-tabindex': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',

      // ===== TYPESCRIPT 관련 룰들 =====
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
    },
  },
];

export default eslintConfig;
