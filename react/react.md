# React

### Learning React
- [React Demos](https://github.com/ruanyf/react-demos)
- [React-router-redux](https://github.com/reactjs/react-router-redux/tree/master/examples/basic) (basic example)

### Example React Apps
- [React starter kit](https://github.com/davezuko/react-redux-starter-kit)
  - Redux
- [React styled hot universal](https://github.com/krasevych/react-redux-styled-hot-universal)
  - Redux
  - Universal Webpack
  - Styled Components
- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) (advanced)
  - Redux
  - Webpack dev/prod
  - generators & sagas
  - selectors
  - Styled Components
- [Full stack React app](https://github.com/reactGo/reactGo)
- [React rails](https://github.com/shakacode/react-webpack-rails-tutorial)
  - Redux
  - Server rendering
  - React on Rails (Ruby)




## [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html)

![lifecycle](./lifecycle.png)

### First Render
1. getDefaultProps
2. getInitialState
  - from Redux and `this.state`
3. componentWillMount
4. render
  - `JSX`
5. componentDidMount

### Props Change
1. componentWillReceiveProps
2. shouldComponentUpdate
  - return `true` or `false`
3. componentWillUpdate
4. render
5. componentDidUpdate

### State Change
1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate

### Unmount
componentWillUnmount

# Redux

![redux](./redux.png)
