# eslint-config-guyellis

From the ESLint team: [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)

## Usage

### Basic

```
$ npm i eslint-config-guyellis eslint
```

Add to your .eslintrc

```
{
  "extends": "guyellis"
}
```

### ES6

To use the es6 rule set:

```
$ npm i eslint-config-guyellis babel-eslint eslint
```

Add this to your .eslintrc:

```
{
  "extends": "guyellis/es6"
}
```

### React

To use the React rule set:

```
$ npm i eslint-config-guyellis eslint-plugin-react eslint
```

Add this to your .eslintrc:

```
{
  "extends": "guyellis/react"
}
```

## Composition

You can use any combination of these shareable configs.

Install the dependencies:

```
$ npm i eslint-config-guyellis babel-eslint eslint-plugin-react eslint
```

.eslintrc:

```
{
  "extends": [
    "guyellis",
    "guyellis/es6",
    "guyellis/react"
  ]
}
```

## Notes

Eslint config properties like `env` or `globals` are 
project specific. Set them in your own .eslintrc file.
Override with your own rules in your .eslintrc file.

For instance:

```
{
  "env": {
    "browser": true
  },
  "globals": {
    "React": true
  },
  "extends": [
    "guyellis",
    "guyellis/react"
  ]
}
```
