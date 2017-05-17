## Can explain:
`variable` - variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.

`type` - the kind of data stored in a variable
6 types: Object, Number, String, Boolean, Null, and Undefined
Arrays are a special type of object.

`string` - storing and manipulating text.
A string (or a text string) is a series of characters like "John Doe".
Strings are written with quotes. You can use single or double quotes:
Strings are immutable.

`array` - An array is a special variable, which can hold more than one value at a time.

`function` - A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it)
You can reuse code: Define the code once, and use it many times.
You can use the same code many times with different arguments, to produce different results.

`object` - An object has properties and methods, The name:values pairs (in JavaScript objects) are called properties.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.

`operators` -
Arithemetic Operators
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus
++	Increment
--	Decrement

Assignment operators assign values to JavaScript variables.
```
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
```
The assignment operator (=) assigns a value to a variable.

Comparison and logical operators
```
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
```

`truthy/falsy` -
6 Falsey values: 0, NaN, undefined, null, “”, false


## Can use:
`if statement` -

`for loop` -
```javascript
for (var i = 0; i < array.length; i++) {
  array[i]
}
```

## Can create:
`strings` -

`array literals` -

`function declarations` - A Function Declaration defines a named function variable without requiring variable assignment. Function Declarations occur as standalone constructs and cannot be nested within non-function blocks. It’s helpful to think of them as siblings of Variable Declarations. Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
```javascript
function bar() {
    return 3;
}
```
```javascript
var bar = function() {

}
```

`object literals` - explicitly assigning object to variable
...compared to `Object constructor`:
```javascript
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
```

## Can access:
`array elements` -

`object properties` -

## Can invoke:
`functions` -

`methods` -
```javascript
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName(); // Will return "John Doe"
```



---
### [Evaluation](https://codeshare.io/)
```javascript
// Variable


// Type


// String


// Array


// Function


// Object


// Operators


// 'truthy'/'falsey'



// If statement


// For loop



// Strings


// Array literals


// Function declarations


// Object literals



// Array elements


// Object properties



// invoke function


// invoke method
```
