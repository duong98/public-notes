// curry
// usage:
// const add = (a, b) => a + b
// const curried = curry(add)
// console.log(curried((2)(2))) // => 4

// your code here
function curry (fn) {
  return innerCurry([])
  function innerCurry (args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    } else {
      return function () {
        return innerCurry(args.concat([].slice.call(arguments)))
      }
    }
  }
}


// Prototype's version?
Function.prototype.curry = function(){
  var fn   = this
    , args = Array.prototype.slice.call(arguments)
  return function(){
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)))
  }
}

// Functional's version?
Function.prototype.partial = function(){
  var fn   = this
    , args = Array.prototype.slice.call(arguments)
  return function(){
    var arg = 0
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args [i] = arguments[arg++]
      }
      return fn.apply(this, args)
    }
  }
}

//
Function.prototype.curry = function(){
  if (arguments.length < 1) {
    return this
  }
  var __ method = this
    , args      = toArray(arguments)
  return function(){
    return __method.apply(this, args.concat(toArray(arguments)))
  }
}

Function.prototype.curry = function(){
  var
    method = this
  , i      = 0
  , len    = this.length
  , args   = []

  function f() {
    args.push(arguments[0])
    if (++i < len) {
      return f
    } else {
      method.apply(this, args)
    }
  }
  return f
}


//
const argsArr = args => Array.from(args)

const curry = (fn, n) => {
  const args = argsArr(arguments)
  if (n === args.length -2) {
    return fn.apply(undefined, args.slice(2))
  } else {
    return () => {
      return curry.apply(undefined, args.concat(arguments))
    }
  }
}
// modified to use Function.length
const newCurry = (fn, n) => {
  let args = argsArr(arguments)
  if (typeof(n) == 'undefined') {
    args[1] = fn.length
  }
  if (n === args.length - 2) {
    return fn.apply(undefined, args.slice(2))
  }
  return function(){
    return newCurry.apply(undefined, args.concat(argsArr(arguments)))
  }
}


// okay, that's cute because it just lets you specify however many you want, but...
const cur = (fn, ...argsOne) => (...argsTwo) => fn(...argsOne, ...argsTwo)
// or, allowing placeholders, as in underscore:
const curMore = (fn, ...argsOne) => {
  let i = argsOne.indexOf(_)
  let argsOne = (i === -1) ? [] : argsOne.splice(i).slice(1)
  return (...argsTwo) => fn(...argsOne, ...argsTwo, ...argsThree)
}

//
function curry(fx){
  var arity = fx.length
  function f1(){
    var args = Array.prototype.slice.call(arguments, 0)
    if (args.length >= arity) {
      return fx.apply(null, args)
    }
    function f2(){
      return f1.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)))
    }
    f2.toString = function(){
      return fToString(fx) + '(' + args.join(', ') + ')'
    }
    return f2
  }
  f1.toString = function(){
    return fToString(fx)
  }
  return f1
}

// this is approximately the same as wu.js's .autoCurry() (which has been removed??)
var autoCurry = (function(){

  var
    toArray = function toArray(arr, from){
    return Array.prototype.slice.call(arr, from || 0)
  }

, curry = function curry(fn) {
    var args = toArray(arguments, 1)
    return function curried(){
      return fn.apply(this, args.concat(toArray(arguments)))
    }
  }

  return function autoCurry(fn, numArgs){
    numArgs = numArgs || fn.length
    return function autoCurried(){
      if (arguments.length < numArgs) {
        return numArgs - arguments.length > 0 ?
        autoCurry(curry.apply(this, [fn].concat(toArray(arguments)))
      , numArgs - arguments.length)           :
        curry.apply(this, [fn].concat(toArray(arguments)))
      } else {
        return fn.apply(this, arguments)
      }
    }
  }

}())
