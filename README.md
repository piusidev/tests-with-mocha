# Tests with Mocha

## The basic

The `describe()` function is used for group similar tests and in the `it()` function is where we put the code.

We can put how many `it()` function are needed inside the `describe()`

## Methods

### `notStrictEqual()`

This method receive 2 params, the first is the value which we wanna test, and the next is the expected value, if both values are the same, an error is emitted.

### `strictEqual()`

This method works similar the `notStrictEqual()`, but if both values are the same, the test is passed.

### `deepStrictEqual()`

The `deepStrictEqual()` function test if the objects have the same propertys.

### `throws()`

This method can verifify the errors emitted. We need pass two arguments to `throws()` function, the first is the function who emmit the error, and in next the expected error.

## Testing asynchronous code