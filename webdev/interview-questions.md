# General WebDev Interview Questions

## Technical Questions
- [Javascript](./../javascript/toy-problem-help.md)

## Conceptual Questions

### HTML/CSS
###### What is the DOM?
The Document Object Model is the API for creating HTML and XML documents and accessing elements of a webpage. Various languages can interact with this API like HTML, Javascript, and .NET.

###### What does semantic HTML mean?
A semantic HTML element describes clearly to the browser and the developer the purpose of the element's children. Some semantic elements include `<form>`, `<main>`, and `<footer>`.

###### What is the box model?
HTML elements can be considered as boxes with regards to design and layout. Every HTML element has wrapped around it a margin, border, padding and then the actual content. This affects the total calculations of elements. An elements total height includes the `height` + `padding-top/bottom` + `border-top/bottom` + `margin-top/bottom`.

```css
html {
  box-sizing: border-box;
}
```

The default property is `content-box` where border, padding, and margin are **NOT** included in Width x Height calcuations. With `border-box`, W x H includes content, padding and border, but not the margin (i.e. adding `padding` won't increase the width or height).


###### Explain specificity.
CSS selectors have varying degrees of specificity which determine which CSS attributes will be rendered. The order of increasing specificity is: elements < classes < IDs < inline styles. `!important` overrides any other declarations.

###### What is the difference between IDs and Classes?
An element can only have 1 ID, while multiple classes. IDs are more specific than classes.

###### What does the z-index do?
It specifies the stack order of an element. If `x` and `y` are planar axis on the screen, the `z axis` moves into and away from the screen.

### JavaScript
###### Summarize what the keyword 'this' is used for?
The keyword this is used to access and reference _context_ in a function. The `this` reference **always** refers to an object.

Methods in objects have `implicit` context, while bind, call, and apply have `explicit` context when used.

###### What is a callback?
A callback is a function that's passed in as an argument to another function (a higher-order function).

###### What is a closure?
A closure occurs at runtime and happens when a function returns another function _including_ the entire context of that function (all of the variable definitions in its parent function).

###### How does prototype work?
All objects inherit properties and methods from their prototype. Most objects inherit from a prototype called `Object.prototype` and can also inherit other properties from other prototypes like `Date.prototype` if it's a date object.

Methods in a prototype can be used on any of the object's children. For example, an `array` created from `new Array` can access all of the methods in `Array.prototype` such as `Array.prototype.slice()` or `.replace()`.

###### What is REST?
REST is REpresentational State Transfer is an architectural style for managing state information.

REST-compliant web servers allow manipulating client and server data by using a set of stateless operations: C.R.U.D. (create, read, update, delete) which translate into some HTTP verbs POST, GET, PUT, DELETE.


###### What is an API?
An Application Programming Interface is a set of rules that software programs follow to communicate with each other. Whether that's code interfacing with a library, or code interacting with another server, there are rules and specifications that programs use to communicate between one another.


### Key Frameworks & Libraries
#### Angular
###### What is the Angular MVC?
Model-view-controller is an application architectural pattern.

The `model` is the data and data-management of the app. It manages fundamental behavior/data of the application, responds to requests and instructions to change the state of its information.

The `view` is the UI that renders the data from the model.

The `controller` receives user input and makes calls to the model objects and view to perform appropriate actions.



#### React
###### What is the component lifecycle?
Events that occur at particle times in React's DOM manipulation. Component methods allow us to manipulate and override these events at particular times while the component is being created, inserted into the DOM, updated on the DOM, and removed from the DOM.
