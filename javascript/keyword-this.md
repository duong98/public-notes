The keyword this is used to access and reference *context* in a function. The this reference **always** refers to an object.


```js
console.log(typeof this);


// console.log(this);


console.log(this === window);


var name = 'brett';
console.log(this.name);


var updateKnowledge = function() {
  console.log(this === window);
}
updateKnowledge();
```

### Methods have implicit context.
```js
var student = {
  name: 'brett',
  updateKnowledge: function() {
    console.log(this);
  }
}
student.updateKnowledge();

// now that we're working in the context of the object "student", this will refer to the actual object that calls the function.
// implicit


var student = {
  name: 'brett',
  updateKnowledge: function() {
    var fn = function() {
      console.log(this === window);
    }
    fn();
  }
}
student.updateKnowledge();


var Student = function(name, knowledge) {
  this.name = name; // comma? nope! it's a function...
  console.log(this);
}

var student1 = new Student('brett');
// when we use 'new', this will be assigned to the brand new object created by new

console.log('============');
var Student = function(name, knowledge) {
  this.name = name; // comma? nope! it's a function...
}

Student.prototype.updateKnowledge = function() {
  console.log(this);
}

var student1 = new Student('brett');
student1.updateKnowledge();

// the prototype is bound to the object now, and has a context within the object.
```

`learnCode()` - there are also other ways to invoke a function. Sometimes we want to take control of the `this` keyword and that's where `call()` and `apply()` come in.

Libraries like [jQuery](http://code.jquery.com/) and Angular have tons of these. The main reason why you'd want to use these is to get control over what `this` is set to in a function.

### Bind/call/apply have explicit context.

```js
var updateKnowledge = function() {
  console.log(this === window);
}
updateKnowledge.call({}); // then try adding key:value to object. same results? yup!
```
The call function lets us pass an object which becomes the `this` keyword within that function.

```js
var updateKnowledge = function(knowledge) {
  console.log(this.name + ' has ' + knowledge);
}

var student = {
  name: 'brett'
}

updateKnowledge.call(student, 'some knowledge');
```

Apply: you're not always going to know how many arguments you have, so sometimes you may want to pass in an array...
```js
var updateKnowledge = function(knowledge, about) {
  console.log(this.name + ' has ' + knowledge + ' about ' + about);
}

var student = {
  name: 'brett'
}

updateKnowledge.apply(student, ['some knowledge', 'cats']); // without an array passed in here, we'd get a TypeError from JS
```

Bind: same as call but stored in a variable and not invoked.
```js
var updateKnowledge = function(knowledge) {
  console.log(this.name + ' has ' + knowledge);
}

var student = {
  name: 'brett'
}

var bound = updateKnowledge.bind(student, 'some knowledge');
console.log(bound)
console.log(bound() === updateKnowledge.call(student, 'some knowledge')); // true
```

---

**The context is set at the time of invocation.**

##### 4 contexts for context:
1. explicit - call/bind/apply
2. implicit
3. default (window)
4. new
