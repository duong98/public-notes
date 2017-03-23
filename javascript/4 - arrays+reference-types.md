# Reference Types Explained
##### What are reference types?

#### Primitive Type Storage
```js
let n = 42; // stores 42 into namespace n in memory
let a = n; // copies value in n and stores in a
```
Values get copied around a lot in Primitive Type Storage. It's different with reference types.

#### Common Reference Types
1. Objects
2. Arrays
3. Dates
4. RegExp's
5. Functions
6. Primitives (via Wrappers)

```js
let obj = { name: 'bob' }; // 'obj' contains a [pointer] or a 'reference' to an unknown memory location where the {} is stored
let obj2 = obj; // 'obj2' has the reference point copied in it, not the actual object.
```
Both obj and obj2 now have pointers that reference the same object stored in memory.

```js
obj2.name = 'frank'; // now obj.name is 'frank' also (!)
```

## Reference Type Examples

##### Practice problem - try in repl.it
```js
let a = 1; // primitive type storage
funk1 = (b) => {
  b = 0;
}
funk1(a);
console.log(a); // 1 - the original value

let x = { y: 1 }; // reference type storage
funk2 = (z) => {
  z.y = 0;
}
funk2(x);
console.log(x); // 0 - the new value change from the function
```

# Arrays
```js
let arr = [0, 'what', {1:1}];
console.log(arr[3]); // undefined
```

some nuances of arrays...
```js
let arr = new Array(3) // [ , , ]

let arr2 = [1, 2];
arr2.length = 4; // [1,2, , ]
arr2[100] = 'dope'; // arr2 is expanded
arr2.length = 'really dope'; // arr2[100] is now 'really dope'

arr2.valueOf(); // returns array values [1, 2, , ]
```

## Array Features
```js
let arr = [];
arr.push(1, 2);

arr.concat([3, 4], 5, 6);
```

```js
let arr = [1, 2, 3, 4];
let arr2 = arr.slice(1, 3); // arr2 = [2, 3];
console.log(arr.toString()); // 1,2,3,4 // calling functions on arrays almost always creates a new array, instead of modifying the original array.
arr.splice()

// here's an EXCEPTION - it does modify original array
arr.splice(1, 2); // removes 2,3 from arr

arr.splice(2, 0, 99, 100); // delete 0 indices and add 99, 100 value @ 2
```

```js
let arr = [4, 1, 2, 3, 10];
arr.sort(); // [1, 10, 2, 3, 4]

arr.sort((val1, val2) => { return val1 - val2 }); // [1, 2, 3, 4, 10]
```




# Dates


# Regular Expressions
