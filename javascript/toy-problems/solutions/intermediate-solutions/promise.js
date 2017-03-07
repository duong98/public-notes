// make a function that takes one parameter and returns a new promise
// allow the promise to either resolve or reject
// use setTimeout to simulate delay
// if the input is a string, resolve the promise with that string, uppercased
// if the input is not a string, reject it (with that same input)

const upperProm = str => new Promise((res, rej) => {
  setTimeout(() => {
    if (typeof str === 'string') {
      res(str.toUpperCase())
    } else {
      rej(str)
    }
  }, 1000)
})

