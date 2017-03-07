// make an event system function that adds a .on() and .trigger()
// to any object passed to it

// example usage:
// const z = { name : 'zac' , age : 26 }
// z.on('growingOlder', () => console.log(`i'm now ${z.age}`))
// z.age++
// z.trigger('growingOlder')

const mixEvents = (obj) => {
  let eventsMap = {}

  obj.on = (eventName, cb) => {
    eventsMap[eventName] = eventsMap[eventName] || []
    eventsMap[eventName].push(cb)
  }

  obj.trigger = eventName => {
    const args = Array.prototype.slice.call(arguments, 1)
    const arrayOfCb = eventsMap[eventName] || []
    arrayOfCb.forEach(function (cb) {
      cb.apply(obj, args)
    })
  }
  return obj
}
