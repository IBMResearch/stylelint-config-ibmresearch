/**
 * Copyright (c) IBM and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE.txt
 * file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
    'order/order': ['custom-properties', 'declarations'],
  },
};
