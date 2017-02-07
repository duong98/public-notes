Check a str for whether or not it's a palindrome.

```javascript
let checkPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/, "");
  return str == str.split('').reverse().join('');
}
```

---
