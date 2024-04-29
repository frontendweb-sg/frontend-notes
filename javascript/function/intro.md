# What is function?

Functions are one of the fundamental building blocks in javascript, a function in javascript is similar to a `procedure`

`Procedure:`
A set of statement that perform -`task` and `calculates` a value.

To use a function, you must define it somewhere in the `scope`.

Function is a `first-class` citizen in javascript.

<br />

**`Function declaration`**:

Also called a `function defination` or `function statement`

```js
// Write a function to return sum of 5 + 5;
function Plus() {
  return 5 + 5;
}
```

- `function` keyword used to declare function.
- `parameters` you can pass any parameter as `value` or `reference`.
- `{ /* ... */}` this is a function body, define the statement.
- `return` default value is undefined.

<br />

`Note:`

All `functions` are instance of `Function`.

<br />

**`Arrow function:`**

A shorted syntax and non-binding of `this`.

An arrow function expression (also called as `fat arrow`) has a sorter syntax compared to function expression and it does not have it's own `this`, `arguments`, `super` and `new.target`.

Arrow functions are always `annonymouse`.

<br />

**`Defining functions:`**

Javascript has four kinds of functions:

- `Regular function:` can return anything; always runs to completion after invocation.
- `Generator function:` returns a `Generator` objcect; can be paused and resumed with the `yield` operator
- `Async function:` returns a `Promise`; can be paused and resumed with the await function.
- `Async generator function:` returns an `AsyncGenerator` object; both the `await` and `yeild` operators can be used.

<br />

For every kind of `function`, there are three ways to define it.

**`Declaration`**

- `function`
- `function*`
- `async function`
- `async function*`

<br />

**`Expression`**

- `function`
- `function*`
- `async function`
- `async function*`

<br />

**`Constructor`**

- `Function`
- `GeneratorFunction`
- `AsyncFunction`
- `AsyncGeneratorFunction`
