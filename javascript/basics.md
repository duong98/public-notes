# Basics

### Variables
`foo = 9001;` - bug, allows global variable creation

versus
```javascript
'use strict'
foo = 3001; // logs Runtime Error, can't create global variable
```

`typeof foo` returns `number`

#### Primitive data types: number, string, boolean, undefined (uninitialized variable)
#### Complex data type: object, function

Other objects: `arrays`, `null`
Example:
```javascript
let order = [1, 2, 3, 4]
let order2 = null;
console.log(typeof order, typeof order2); // both return 'object'
```

variables can only begin with letters or with `_` or `$`.

### Functions

```javascript
printFoo();

function printFoo() { // function declaration - creates a global function, not hoisted
  console.log('foo'); // defined afterwards. Works because of javascript's 2-pass
}

// BUT wouldn't work with (see hoisting below)
var printFoo = function() { // function expression - printFoo is not a function yet (hoisted to undefined)
  console.log('foo');
}
```

### OTHER
Switch
```javascript
switch (true)
  case EXPRESSION_HERE:
    results
    break;
```

While
```javascript
let i = 0;
while (i < 3)
  console.log(i++);
```

do while
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

### Loops
```javascript
let i = 0;
for (; i < 5;) {
  if (i === 1)
    continue; // skips console logging 1; -- 0, 2, 3, 4
  console.log(i++);
  if (i === 4)
    break;
}
```
