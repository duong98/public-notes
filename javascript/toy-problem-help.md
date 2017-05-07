# Practice

## Useful resources
- Check out my [career](./../../other/career.md) for additional whiteboarding help
- [Reversing a string](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.21a6igs2v)
- [Check for palindromes](https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7#.cloixfqz0)
- [Factorialize numbers](https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38#.8uwibba2o)
- [Confirm the ending of a string](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac#.7bgq02qua)
- [Find the longest word in a string](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.rwmqzokyn)
- [Title case a sentence](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27#.wxvzuvj5u)



# Toy Problems

## Popular Problems
- [Javascript Interview Questions](https://github.com/kennymkchan/interview-questions-in-javascript)

###### Fibonacci number
Definition: After the seed numbers, 0 and 1, each successive number is the sum of the previous two numbers.

```js
let fibonacci = (n) => {
  if (n <= 2) {
      return 1;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// OR with generators (fancy...but impractical)

function* fib (n) {
  const isInfinite = n === undefined;
  let current = 0;
  let next = 1;
  while (isInfinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}
```



## Learn to recreate Javascript

###### Recreate `map`

```js
Array.prototype.map = function(cb) {
  let newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
}
```

```js
Array.prototype.sort = (cb) => {

}
```

###### Recreate `bind`

```js
Function.prototype.bind = function(context) {
  arguments
  let args = Array.apply(null, arguments).splice(1); // or you could use Array.from(arguments)
  let self = this;
  return function() {
    return self.apply(context, args);
  }
}

thisFunction.bind(obj, 1,2,3)();

// OR

Function.prototype.bind = function(context) {
  let args = [...arguments].splice(1);
  return () => {
    return this.apply(context, args);
  }
}

// OR

Function.prototype.bind = function(context, ...args) { // args is a rest parameter
  return () => this.apply(context, args);
}
```


## Debugging

#### Javascript Error types

- `EvalError` - occurs regarding the global function eval().
- `InternalError` - occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
- `RangeError` - occurs when a numeric variable or parameter is outside of its valid range.
- `ReferenceError` - occurs when de-referencing an invalid reference.
- `SyntaxError` - occurs while parsing code in eval().
- `TypeError` - occurs when a variable or parameter is not of a valid type.
- `URIError` - occurs when encodeURI() or decodeURI() are passed invalid parameters.
