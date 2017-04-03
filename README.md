# stylelint-config-ibmresearch

> Stylelint shareable config for the IBM Research CSS style guide.

## Installation

```
npm install --save-dev stylelint stylelint-plugin-html stylelint-config-ibmresearch
```

## Usage

Once the `stylelint-config-ibmresearch` package is installed, you can use it by
specifying `stylelint-config-ibmresearch` in the [`extends`](https://stylelint.io/user-guide/configuration/#extends)
section of your [ESLint configuration](https://stylelint.io/user-guide/configuration).

```js
{
  "extends": "stylelint-config-ibmresearch",
  "rules": {
    // Additional, per-project rules...
  }
}
```
