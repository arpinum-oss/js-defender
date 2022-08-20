# @arpinum/defender [![Build Status](https://github.com/arpinum-oss/js-defender/workflows/CI/badge.svg)](https://github.com/arpinum-oss/js-defender/actions?query=workflow%3ACI)

> Every absurdity has a champion to defend it.  
> <cite>Oliver Goldsmith</cite>

_@arpinum/defender_ is a collection of assertions to do some runtime type checking.

## Installation

```
npm install @arpinum/defender --save
```

## Examples

Assertion throwing exception when not satisfied:

```ts
import { assert } from "@arpinum/defender";

assert("hello").toBeANumber(); // throws: value must be a number
```

Simple validation returning a boolean:

```ts
import { is } from "@arpinum/defender";

is("hello").aNumber(); // false
```

More examples in [examples](examples).

## Docs

- [API](docs/api.md)

## License

[MIT](LICENSE)
