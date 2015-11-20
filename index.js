module.exports = {
  'rules': {
    'camelcase': 1,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'complexity': [1, 10],
    'consistent-this': [2, '_this'],
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'guard-for-in': 1,
    'indent': [1, 2, {'SwitchCase': 1}],
    'new-cap': 0,
    'new-parens': 2,
    'no-caller': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-eq-null': 1,
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-invalid-regexp': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-redeclare': 2,
    'no-restricted-modules': [2, 'underscore'],
    'no-self-compare': 1,
    'no-shadow-restricted-names': 2,
    'no-shadow': [2, {'builtinGlobals': true, 'hoist': 'all'}],
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-underscore-dangle': 1,
    'no-unreachable': 2,
    'no-unused-vars': 1,
    'no-use-before-define': 2,
    'no-with': 2,
    'one-var': [1, 'never'],
    'operator-assignment': [2, 'always'],
    'quotes': [2, 'single'],
    'radix': 2,
    'semi': [2, 'always'],
    'sort-vars': [1, { 'ignoreCase': true }],
    'space-in-brackets': 0,
    'space-infix-ops': 1,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'strict': [1, 'global'],
    'use-isnan': 2,
    'valid-jsdoc': 1,
    'vars-on-top': 0,
    'yoda': [1, 'never', { 'exceptRange': false }]
  }
};
