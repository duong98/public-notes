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

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
    </div>
  ` // or use templateUrl for a template file
});

export class AppComponent {
  title: string = 'Home Page'; // to map the binding to a value
}
```
