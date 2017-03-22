# [Momentjs](https://momentjs.com/)

### Why use Moment?
The `Date` object can be complicated and difficult to find the right format.
[W3Schools - Date](https://www.w3schools.com/jsref/jsref_obj_date.asp)
[MDN - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

In addition to other features, Moment makes formatting easy: `moment().format('YYYY MM DD');`

### Examples
[Moment examples](http://codepen.io/brettinternet/full/LWmEjP/)


### Installation
```
npm install moment
```
...or use the CDN.

For an angular app, I recommend using [angular-moment](https://github.com/urish/angular-moment) as a directive since it's so easy to implement.

### Manipulate Dates

```js
moment().add('days', 7);    // adds 7 days to current date
moment().add('months', 7);  // adds 7 months to current date
moment().add('years', 7);   // adds 7 years to current date
```

```js
moment().subtract('days', 7);   // subtracts 7 days to current date
moment().subtract('months', 7); // subtracts 7 months to current date
moment().subtract('years', 7);  // subtracts 7 years to current date
```

Calculating how much time from now:
```js
var weekAgo = moment().subtract('days', 7);
weekAgo.fromNow();
```

Relative timestamps:
```js
moment("20111031", "YYYYMMDD").fromNow(); // 5 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // 10 hours ago
moment().endOf('day').fromNow();          // in 14 hours
```

### Using Moment for Logic

Checking date input with `isValid()`:
```js
if (!moment(dateEntered,'MM-DD-YYYY').isValid()) {
  console.log('Invalid Date');
} else {
  console.log('Valid Date');
}
```

You can check logic between two dates with `isAfter()`, `isBefore()`, and `isSame()`.
```js
console.log(moment('2010-09-20').isAfter('2010-10-19')); // returns false
console.log(moment('2010-11-20').isAfter('2010-10-19')); // returns true
```
