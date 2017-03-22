# Variables, Types, Scope

##### Javascript compiling
Two Pass Compilation in Javascript
1. All declarations are located and identifies are known by the compiler
2. Execution occurs; Because all variables are known from Pass 1, they may be accessed before they're declared.

### #Hoisting
Hoisted variables are initialized to undefined
example:
```javascript
console.log(foo); // logs error, not defined
```

```javascript
console.log(foo); // foo is hoisted
let foo = 3000; // logs undefined
```

```js
var text = "outer";
function logIt() {
  console.log(text); // logs undefined
  var text = "inner";
}
```

### Numbers

octo numbers:
```javascript
let octo = 070; // begins with 0, has base 8
console.log(octo); // logs 56
```
if not a valid octo number or in `'use strict'`, returns decimal number

hexidecimal
```javascript
let hex = 0x10;
console.log(hex); // logs 64
```

powers
```javascript
let value = 3.2e-4;
console.log(value); // logs 0.00032
```

```javascript
console.log(Number.MAX_VALUE); // rlly big, almost 'infinity'
console.log(Number.MIN_VALUE); // rlly small, almost '-infinity'

let n = Number.MAX_VALUE * 2;
console.log(n); // returns infinity (a number constant, aka POSITIVE_INFINITY)

console.log(undefined / 3); // returns NaN
console.log(typeof NaN); // logs number ~* oh.. the irony *~
```

### Strings
`let a = '  lol hi   '.trim()` // logs 'lol hi'
strings are immutable, so you have to assign changes to a new variable.

### Boolean
`True` is not defined (only `true`). Boolean('okay') is true, however Boolean('') is false;

Truthy: Boolean(' '), Boolean(6)
Falsey: Boolean(0), Boolean(undefined), Boolean(null)

`!!` turns variables into boolean variables.
```javascript
let value = 34;
console.log(typeof !!value); // logs boolean;
```

### Undefined and null
Best practice for the developer to make variables null, since the javascript engine sets variables to undefined, almost exclusively.

`null` is an empty object.

```javascript
console.log(undefined == null); // true
console.log(undefined === null); // false
```

## Scope

#### Global scope

```javascript
var foo = 3000;
console.log(foo);
console.log(window.foo); // both log same result. global scope unless in a function
```
However, in nodejs, `global` = window;

```javascript
console.log(this === window); // true
```

`'use strict'` - variables cannot be created in global namespace by functions

#### Global scope vs function scope

```javascript
let foo = 1;
function go() {
  let foo = 2;
}
go();
console.log(foo); // 1
```
variables assignments are only found in current or parent's namespace


```javascript
try {
  throw 123;
}
catch (e) {
  console.log(e); // 123; e is only defined in this catch block here, and not hoisted
}
```
`e` returns ReferenceErrors everywhere except for the block

##### Closures

WHY? a neat way of handling 2 realities of Javascript
1. scope is at the function level, not the block level
2. much of what you practice in Javascript is asynchronous and event driven

<!-- http://stackoverflow.com/questions/111102/how-do-javascript-closures-work -->
