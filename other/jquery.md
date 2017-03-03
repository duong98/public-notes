*Selector paired with an action:* `$('p').hide()`

### Header
Document ready indicates that the HTML finished loading.
```javascript
$(document).ready(function() {
  // ...
});
```

Event bubbling goes inward towards the inner-most element;
Propagation goes outward towards the document;


## Jquery Controls

### Window Ready Event

`$(function () {})`, also `$(document).ready(function(){})`


### Selectors
```javascript
$(".some-class") // select by classname
$(this) // the element which created the event
$('.some-class').find('.some-child-class');
$('.some-class').closest('.some-parent-class');
```
[see also](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

### Events

- click
- keyup
- change
- load
- error

`$('body').on('someEvent', '.some-class', function() {});`

http://api.jquery.com/category/events/
https://en.wikipedia.org/wiki/DOM_events#Common.2FW3C_events


### Create Element

Warning, [be cautious](https://www.box.com/blog/securing-jquery-against-unintended-xss/).
```javascript
var $myNewElement = $('<span>Cool beans</span>')
$('.some-class').html('<span>Cool beans</span>')
```

### Manipulate Elements
```javascript
$('.some-class').text("my <script>-safe text");
$('.some-class').val(); //input, textarea, select
$('.some-class').prop('checked'); // checkbox
$('.some-class').show();
$('.some-class').hide();
$('.some-class').prepend($myNewElement);
$('.some-class').append($myNewElement);
also $myNewElement.appendTo($('.some-class'));
$('.some-class').remove();;
$(this).addClass('.style-class');
$(this).removeClass('.style-class');
$(this).toggleClass('.style-class');
$('.some-class').css({}); // misnomer, actually changes 'style' attribute
```
