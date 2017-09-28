/**
 * @license
 * Copyright (c) 2017 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

module.exports = {
  'extends': 'stylelint-config-recommended',
  'rules': {
    /**
     * List of rules
     */
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [true, {
      'ignore': ['consecutive-duplicates-with-different-values']
    }],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [true, {
      'ignore': ['custom-elements']
    }],
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    // 'max-nesting-depth': null,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-unknown-animations': true,

    /**
     * Limit language features
     */
    'color-named': 'never',
    'color-no-hex': null,
    'function-blacklist': null,
    'function-url-no-scheme-relative': null,
    'function-url-scheme-blacklist': null,
    'function-url-scheme-whitelist': null,
    'function-whitelist': null,
    'number-max-precision': null,
    'time-min-milliseconds': null,
    'unit-blacklist': null,
    'unit-whitelist': null,
    'value-no-vendor-prefix': null,
    'custom-property-pattern': null,
    'property-blacklist': null,
    'property-no-vendor-prefix': null,
    'property-whitelist': null,
    'declaration-no-important': null,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': null,
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'declaration-block-single-line-max-declarations': 1,
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-whitelist': null,
    'media-feature-name-blacklist': null,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-name-whitelist': null,
    'custom-media-pattern': null,
    'at-rule-blacklist': null,
    'at-rule-no-vendor-prefix': null,
    'at-rule-whitelist': null,
    'comment-word-blacklist': null,

    /**
     * Stylistic issues
     */
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'named-where-possible',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'custom-property-empty-line-before': ['always', {
      'except': [
        'after-custom-property',
        'first-nested'
      ],
      'ignore': [
        'after-comment',
        'inside-single-line-block'
      ]
    }],
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': ['always', {
      'except': [
        'after-declaration',
        'first-nested'
      ],
      'ignore': [
        'after-comment',
        'inside-single-line-block'
      ]
    }],
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'never',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': ['always', {
      'except': ['first-nested'],
      'ignore': ['after-comment']
    }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'never',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': ['always', {
      'except': [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      'ignore': ['after-comment']
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'comment-empty-line-before': ['always', {
      'except': ['first-nested'],
      'ignore': ['stylelint-commands']
    }],
    'comment-whitespace-inside': 'always',
    'indentation': 2,
    'max-empty-lines': 1,
    'max-line-length': null,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
  }
};
