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
