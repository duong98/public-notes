# Operators

### Normal
##### Addition
Floating point numbers

```js
var total = 5.1 + 3.3 // logs 8.399 (repeated)
```
JavaScript is optimized for speed, and not accuracy. Especially with floating point numbers, it's possible for JavaScript to be off my minuscule amounts. `console.log(5.1 + 3.3 === 8.4)` logs `false`.

To fix this, use `toFixed()` to round the results.

```js
var total = 5.1 + 3.3
console.log(total.toFixed(2)) // logs 8.40
```
Adding different datatypes can have different effects.

**strings**: You can use addition to concatenate strings, or numbers with strings. `2000 + " Space Odyssey"` logs one longer string.

**undefined**: When we're working with numbers and undefined, JavaScript won't throw an error, rather it's just unable to perform the calculation.

```js
2000 + undefined // logs NaN
```

**null**: null is treated as a `0` when added with a number.

```js
2000 + null // logs 2000
```

**NaN**: JavaScript can't evaluate a number with `NaN`.

```js
2000 + NaN // logs NaN
```

Adding a string and number, `undefined`, `null`, or `NaN` will take in the values literally as a string. `"string" + undefined` yields a longer string, `"stringundefined"`, or `"string" + null` yields "stringnull". *This is unique to the `+` operator*.

##### Subtraction
We do run into the same inaccuracy issues as before with floating numbers.

Subtraction is used strictly in a numeric context, since you can't subtract strings.

```js
"10" - "5" // logs 5 (number)
"cats" - "dogs" // logs NaN
```

```js
10 - undefined // NaN
10 - null // 10
10 - NaN // NaN
10 - "" // 10
```

**valueOf**: If you evaluate an object, JavaScript will look for a `valueOf` property.

```js
let obj = {
  valueOf: function() { return 20; }
};
30 - obj; // logs 10
```

##### Multiplication and Division
*Again* JavaScript has a problem with inaccuracy and floating point numbers. `1.1 * 1.1` yields `1.2100..002` and *not* the 1.21 we expected. Use `toFixed()`.

```js
-4 * Infinity // -Infinity
9 / 0 // Infinity // mathematically is should be undefined
```

##### Modulus
Modulus means the remainder.

```js
9 % 4 // logs 1
```

### Unary
`++`, `--`, `+value`, `-value`

```js
let points = 3;
points++ // 4 (post-increment)
++points // 5 (pre-increment)
// HOWEVER
let myPoints = ++points; // myPoints logs 4 WHILE...
let myPoints = points++; // myPoints logs 3 since the increment happens after the assignment, or after the line is complete.
```

`+value` leaves the value as is, it doesn't flip the sign. However, `-value` does change the value. If value is a "string", both +value and -value will return `NaN`.

### Boolean
##### `!` is a not operator
Remember the 6 Falsey values: `0`, `NaN`, `undefined`, `null`, `""`, `false`

```js
!99 // truthy values evaluate to falsey - logs false
```

```js
!new Object(); // false
```

`!!` is not not - turns any value into its boolean value.


##### AND - &&
```js
true && false // false
```

```js
let obj = {
  calc: 'Logical AND'
}
obj && 99 // logs 99
```
If the first operand is an object, then the second operand will always be returned. So `object && value`, value will be returned (no matter what value is).

```js
true && obj // if true is the first operand, the second operand is returned.
false && anythingElse // false, the second value is ignored...
5 && null // null
```

If either operand is null, null will be returned. The same applies to undefined and NaN

##### OR - ||

```js
false || true // true
```

```js
let obj = {
  calc: 'Logical OR'
}
obj || 99 // logs obj
```

If the first operand is an object, then that object gets returned.

Practical use case for this behavior:

```js
let default = {
  volume: 5
}
let mySettings;
mySettings || default; // Object default - since mySettings is not a valid object
```

### Equality
##### `==`
```js
true == 1; // true
true == 2; // false - true is converted to 1, and false is converted to 0
```

```js
42 == '42' // true - the string 42 is parsed, and only values are compared

let obj = { valueOf: function() { return 42 } };
42 == obj; // true - in a numeric context, JavaScript looks for a valueOf in an object

let obj = { toString: function() { return 42 } };
42 == obj; // true - in a numeric context, JavaScript looks for a 'valueOf' in an object, THEN for a 'toString' property

let obj = { 1: 1 }, obj2 = { 1: 1 };
obj == obj2 // false - each obj has its own individual memory space, despite having the same properties
```

```js
null == undefined; // true - this is the one exception!
```

Comparing `null` or `undefined` to anything else will yield false

```js
undefined == 0; // false
null == 0; // false
```

##### `===`

```js
6 === '6'; // false
null == undefined; // false
```

### Relational
`>`, `>=`, `<`, `<=`

```js
'alpha' < 'beta'; // true - alphabetical! Think 'z' is more recent...

'beta' < 'Alpha'; // false

'Beta' < 'alpha'; // true - in ascii unicode values, uppercase come before lowercase

'1' < 9; // true - javascript will try to work in a numeric context in most cases (it parses '1' to 1)

'42' < '100'; // false - no numbers, so compares strings and 1 comes before 4, so false.
```

```js
NaN < 5; // ...nothing
```


### Miscellaneous Operators
##### Compound Assignments
```js
let total = 1;
total += 1; // 2
```

[Which operator has precedence?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```js
let total = 6;
total *= 4 + 1; // 30
```

##### Comma

`let num, num1, num2;`

`let total = (1, 2, 3)` total is 3, since it's the last value. This is bad practice.


---

### Bitwise

##### AND
```js
let num1 = parseInt('1010', 2); // binary numbers
let num2 = parseInt('0110', 2);
let total = num1 & num2;
console.log(total.toString(2)); // logs 10
```

With binary numbers, just the bits are important.

##### OR
```js
let num1 = parseInt('1010', 2);
let num2 = parseInt('0110', 2);
let total = num1 | num2;
console.log(total.toString(2)); // logs 1110
```

##### EXCLUSIVE OR
```js
let num1 = parseInt('1010', 2);
let num2 = parseInt('0110', 2);
let total = num1 ^ num2;
console.log(total.toString(2)); // logs 1100
```

##### LEFT SHIFTS
```js
let num1 = parseInt('0001', 2);
let total = num1 << 2;
console.log(total.toString(2)); // logs 100
```

##### RIGHT SHIFTS
```js
let num1 = parseInt('1000', 2);
let total = num1 >> 3;
console.log(total.toString(2)); // logs 1
```
