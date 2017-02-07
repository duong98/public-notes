Check a string for whether or not it's a palindrome without spaces and special characters.

```javascript
let checkPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/, "");
  return str == str.split('').reverse().join('');
}
```

---
