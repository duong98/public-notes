# Angular 2+

**Component**: template + class (properties & methods) + metadata

#### Template
- view layout
- created with html
- includes binding and directives

#### Class
- code to support the view's template
- typically in typescript
- properties: data
- methods: logic

#### Metadata `@Component({})`
- extra data for angular
- defined with a decorator
  - _Decorator_: A function that adds metadata to a class, its members, or its method arguments
    - Prefixed with `@`
    - define decorator above the class it's decorating

`app.component.ts`

```js
import { Component } from '@angular/core';
import { ChildComponent } from 'child-component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <pm-child-component></pm-child-component>
    </div>
  `,
  directives: [ChildComponent]
});

export class AppComponent {
  title: string = 'Home Page'; // to map the binding to a value
}
```

##### Interpolation
`<h1>{{text}}</h1>` is one way data binding on HTML templates. `text` in this context is a template expression.

##### Directive
Custom HTML element or attribute used to bootstrap or extend our HTML - custom or built-in directives. `*` indicates structural directives.
- `*ngIf`: like a ternary evaluator to display HTML
- `*ngFor`: ng-repeat: `#item of items` and `#` indicates local variables.
  - `for...of` vs `for...in` - `of` indicates iteration over an `iterable` rather than over an object. `for...of` works on arrays, and is adopted by `*ngFor`.


