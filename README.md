# Fooxly ESLint Configuration for React

## Getting Started

⚠️ **Be sure to follow the instructions for our main configuration first! You can find it [here](https://github.com/fooxly/eslint-config/blob/main/README.md).**

### Install

Add our ESLint configuration extension to your project:

#### Using Yarn

```bash
yarn add -D @fooxly/eslint-config-react
```

### Setup

#### `.eslintrc`

**Note**: Always import `"@fooxly/eslint-config"` last to override any conflicting rules.

```json
{
    ...
    "extends": [
        "@fooxly/eslint-config-react",
        "@fooxly/eslint-config"
    ]
}
```
