# @arpinum/defender

> Every absurdity has a champion to defend it.  
> <cite>Oliver Goldsmith</cite>

_@arpinum/defender_ is a collection of assertions to do some runtime type checking.

## Installation

```
npm install @arpinum/defender --save
```

## Examples

Assertion throwing exception when not satisfied:

```javascript
const { assert } = require("@arpinum/defender");

assert("hello").toBeANumber(); // throws: value must be a number
```

Simple validation returning a boolean:

```javascript
const { is } = require("../build");

is("hello").aNumber(); // false
```

More examples in [examples](examples).

## Docs

- [API](docs/api.md)

## License

[MIT](LICENSE)
