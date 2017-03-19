# Operators



! and !!

```
!!false === false
!!true === true

!!0 === false
!!parseInt("foo") === false // NaN is falsy
!!1 === true
!!-1 === true  // -1 is truthy

!!"" === false // empty string is falsy
!!"foo" === true  // non-empty string is truthy
!!"false" === true  // ...even if it contains a falsy value

!!window.foo === false // undefined is falsy
!!null === false // null is falsy

!!{} === true  // an (empty) object is truthy
!![] === true  // an (empty) array is truthy
```

---
# Arrays and Reference Types


---
# Objects, JSON and Prototypes


---
# Functions


---
# BOM and DOM


---
# Event Handlers


---
# Build-in Objects and Functions


---
# Miscellaneous Topics



---
# Other

## Resources
- [What the heck, Javascript?](https://gist.github.com/brettinternet/acb72b414d5434fd97d0c3de89fac501)
- [Learning Advanced Javascript discussion](https://news.ycombinator.com/item?id=13149635)
- [JS Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

```javascript
let total = 5.1 + 3.3;
console.log(total); // logs 8.3999
```
