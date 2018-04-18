# Assertions

## Presence

```javascript
assert(3).toBePresent(); // ok
assert(null).toBePresent(); // ko
```

## Absence

```javascript
assert(null).toBeAbsent(); // ok
assert(3).toBeAbsent(); // ko
```

## String

```javascript
assert('hello').toBeAString(); // ok
assert(3).toBeAString(); // ko
```

## Boolean

```javascript
assert(true).toBeABoolean(); // ok
assert('true').toBeABoolean(); // ko
```

## Number

```javascript
assert(3).toBeANumber(); // ok
assert('3').toBeANumber(); // ko
```

## Date

```javascript
assert(new Date()).toBeADate(); // ok
assert('2018-01-01').toBeADate(); // ko
```

## Function

```javascript
assert(console.log).toBeAFunction(); // ok
assert(console.log()).toBeAFunction(); // ko
```

## Array

```javascript
assert([1, 2]).toBeAnArray(); // ok
assert(1).toBeAnArray(); // ko
```

## Object

```javascript
assert({ name: 'John' }).toBeAnObject(); // ok
assert(true).toBeAnObject(); // ko
```

## Misc

`assert` function can take `name` as second argument to display this name in error message:

```javascript
assert('hello', 'count').toBeANumber(); // throws: count must be a number
```

# Validations

## Presence

```javascript
is(3).present(); // true
is(null).present(); // false
```

## Absence

```javascript
is(null).absent(); // true
is(3).absent(); // false
```

## String

```javascript
is('hello').aString(); // true
is(3).aString(); // false
```

## Boolean

```javascript
is(true).aBoolean(); // true
is('true').aBoolean(); // false
```

## Number

```javascript
is(3).aNumber(); // true
is('3').aNumber(); // false
```

## Date

```javascript
is(new Date()).aDate(); // true
is('2018-01-01').aDate(); // false
```

## Function

```javascript
is(console.log).AFunction(); // true
is(console.log()).AFunction(); // false
```

## Array

```javascript
is([1, 2]).anArray(); // true
is(1).anArray(); // false
```

## Object

```javascript
is({ name: 'John' }).anObject(); // true
is(true).anObject(); // false
```
