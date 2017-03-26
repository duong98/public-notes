
The wide mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, the frog then makes a tiny mouth.

Your goal in this problem is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
```js
function mouth_size(animal) {
  if (animal !== "alligator") {
    return "wide";
  } else {
    return "small";
  }
}
```

---

Create an empty Object called backPack.
Now, create a variable called 'item' and set it equal to the string 'firstPocket'.
Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.
Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack.

```js
var backpack = {};
var item = 'firstPocket';
backpack[item] = 'chapstick';
backpack.color = 'black'

//After you do the above, console.log your entire backPack object.
// Code Here
console.log(backpack)

//Using bracket notation change the firstname from sally to cooper
function changeName() {
  var person = {
      firstname: 'sally',
      lastname: 'smith',
      age: 29,
      location: 'Orem, UT'
  } person['firstname'] = 'cooper'
  // Code here to change the firstname
  return person.firstname
}
// Inside the if block check if name is equal to person firstname
function checkName(name) {
  var person = {
      firstname: 'sally',
      lastname: 'smith',
      age: 29,
      location: 'Orem, UT'
  }
  if(name === checkName.firstname){// Code Here )
      return true
  }
}
```
The CIA has hired you to write a program to protect agents going into deep cover.
All information about them needs to be redacted.
Finish the redact function by looping over the agent passed in as an arguement to the function ,change key values to the string 'redacted', console.log the agents when complete(you can test this in repl.it) https://repl.it/languages/javascript
```js
var jason = {
  lastName: 'Bourne',
  age: 28,
  skills: ['riding motorcycles up staircases', 'quick reflexes', 'multi-lingual'],
  activeAgent: true,
  currentLocation: 'Congo'
}
var sarah = {
  lastName: 'Walker',
  age: 28,
  skills: ['Infiltration', 'Gun Master', 'Kung Fu'],
  activeAgent: true,
  currentLocation: 'Buy More, Burbank California'
}
function redact(agent) {
  //Code Below
  for(var prop in agent) {
    agent[i].prop = 'redacted'
  }
}
redact(jason);
redact(sarah);
//Console.log both agents below
console.log(agent)
```

---

Description:
create a function called filter_list that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
```js
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(arr) {
  var newArr = [];
  for(var i=0; i>arr.length;i++) {
    if(isNaN(arr[i])){
      delete arr[i];
    } else {
      newArr.push(arr[i])
    }
  }
} return arr;

SOLUTION
function filter_list(list) {
  for(var i = 0; i <list.length;) {
    if(typeof list[i] !== 'number') { //typeof list[i]:evaluates 1 value - number or string
      list.splice(i, 1) //splice(where, how many, what to replace)
    } else {
      i++;
    }
  }
}
```

---

DoubleChar
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

```js
function doubleChar(str) {
  var str2 = '';
  for (var i = 0; i < str.length; i++) {
    str2.push(str.charAt(i));
  } return str2
}

doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "
```

An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
```js
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
function isIsogram(str) {
}
```

---

Consider an array of sheep where some sheep
may be missing from their place. We need a
function that counts the number of sheep present
in the array (true means present).
For example,
```js
arr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
```
```js
function countSheep(arr) {
  var count = 0;
  sheep.forEach(function(x)) {
    if(x) {
      count = count + 1;
    }
  })
  return count;
}
countSheep(arr);
```

---

Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
Note: You can expect all of the inputs to be the same length.
```js
function tripleTrouble(one, two, three){
  var str = "";
  for(var i = 0; i < one.length; i++) {
    str = str + one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return str;
}

tripleTrouble("Bm", "aa", "tn");
tripleTrouble("LLh","euo","xtr");
```

---

Count by x
Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number x and the number of times to count n will be positive numbers greater than 0.

Return the results as an array

Examples:
```js
countBy(1,10) should return [1,2,3,4,5,6,7,8,9,10];
countBy(2,5) should return [2,4,6,8,10];
```
```js
function countBy(x, n) {
  var z = [];
  for(var i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}
countBy(2,5);
```

---

Create a function mimicking Math.pow(x, y);

Examples:
```js
exponent(2,3) should return 8
exponent(5,4) should return 625
```

```js
function exponent(a, b) {
  var total = a;
  for(var i = 1; i < b; i++) {
    total *= a;
  }
  return total;
}

exponent(2, 3);


//  OR //

function intPow(base, exp) {
    result = base;
    while (--exp) result *= base;
    return result;
}
```

---

Check a string for whether or not it's a palindrome without spaces and special characters.

```javascript
var checkPalindrome = function(str) {
  str = str.replace(/[^a-zA-Z0-9]/, "");
  return str == str.split('').reverse().join('');
}
```

---

Write a a function called isPrime that takes in a number and returns true if it is prime and false if it's not prime.

```js
function isPrime(num) {
  if(num < 2) return false;
  for (var i=2; i<num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(131);
```

Push all the prime numbers up to the given number to an array and return the array.

```js
function isPrime(num) {
  if (num < 2) return false;
  for(var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function listPrimes(max) {
  var primeNumbers = [];
  for(var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

listPrimes(37);
```


Make function that takes a string with parens, brackets, braces, carrot({[]})<> checks to see if they close
"(string{string})" --true // "([string]}" -- false
```js
function checker (string) {
  //need an object to keep track of what you're looking for
  var obj = {
    "()": 0,
    "{}": 0,
    "[]": 0,
    "<>": 0
  };
  for (var i = 0; i < string.length; i++) {
    for (var key in object) {
        //let's you know that the char is an opening
        //all the 0 index is going to be the first character in obj[key] e.g. "{"
        if(key.indexOf(string[i]) === 0) {
          //add a number if it's opening
          obj[key]++;
        } else if (key.indexOf(string[i]) === 1) {
          //subtract a number if it's closing
          obj[key]--;
          //none of these values should ever go below zero. if it does, it means that there was a closing bracket before an opening.
          if(obj[key] < 0) {
            return false;
        }
      }
    }
  }
  //if everything is zero at the end, then it passes. check obj again.
  for(var item in obj) {
    if(obj[item]) {
      return false;
    }
  }
  return false;
}

checker("{}(){}[{()}]");
```

---

Come up with more than one way to reverse a string.

```js
function reverseString1(str) {
  let str2 = "";
  for (let i=str.length - 1; i >= 0; i--) str2 +=str[i];
  return str2;
}
reverseString1("hello");

function reverseString2(str) {
    return str.split("").reverse().join("");
}
reverseString2("hello");


function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
```

---
