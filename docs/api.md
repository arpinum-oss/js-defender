# Assertions

```javascript
assert(3).toBePresent(); // ok
assert(null).toBePresent(); // ko

assert(null).toBeAbsent(); // ok
assert(3).toBeAbsent(); // ko

assert('hello').toBeAString(); // ok
assert(3).toBeAString(); // ko

assert(true).toBeABoolean(); // ok
assert('true').toBeABoolean(); // ko

assert(3).toBeANumber(); // ok
assert('3').toBeANumber(); // ko

assert(new Date()).toBeADate(); // ok
assert('2018-01-01').toBeADate(); // ko

assert(console.log).toBeAFunction(); // ok
assert(console.log()).toBeAFunction(); // ko

assert([1, 2]).toBeAnArray(); // ok
assert(1).toBeAnArray(); // ko

assert({ name: 'John' }).toBeAnObject(); // ok
assert(true).toBeAnObject(); // ko
```

`assert` function can take `name` as second argument to display this name in error message :

```javascript
assert('hello', 'count').toBeANumber(); // throws: count must be a number
```

# Validations

```javascript
is(3).present(); // true
is(null).present(); // false

is(null).absent(); // true
is(3).absent(); // false

is('hello').aString(); // true
is(3).aString(); // false

is(true).aBoolean(); // true
is('true').aBoolean(); // false

is(3).aNumber(); // true
is('3').aNumber(); // false

is(new Date()).aDate(); // true
is('2018-01-01').aDate(); // false

is(console.log).AFunction(); // true
is(console.log()).AFunction(); // false

is([1, 2]).anArray(); // true
is(1).anArray(); // false

is({ name: 'John' }).anObject(); // true
is(true).anObject(); // false
```
