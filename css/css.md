# Resources
CSS is one of the easiest languages to learn, and the hardest one to scale.
- [Modern CSS Explained](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525) - Some historical context to the evolution of CSS
- [Learn CSS layout](http://book.mixu.net/css/)
- Some folks don't like much CSS ([Website](http://motherfuckingwebsite.com/)) and others think just a little CSS will go a long way ([Better Website](http://bettermotherfuckingwebsite.com/)).


### Examples
- [CSS Tricks snippets](https://css-tricks.com/snippets/css/)

### CSS Tours
- [GitHub's CSS](http://markdotto.com/2014/07/23/githubs-css/)
- [Lonely Planet's CSS](http://ianfeather.co.uk/css-at-lonely-planet/)
- [CodePen](https://codepen.io/chriscoyier/post/codepens-css)


# Properties
### Grid
- [Why you should use CSS Grid](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163)
- [Course to learn Grid](https://scrimba.com/g/gR8PTE)
- [Prototyping sites with Grid](https://medium.freecodecamp.org/how-to-prototype-websites-quickly-with-css-grid-ffc9cba08583)

### Vertical Alignment
- [Vertically align `div` in all browsers](https://stackoverflow.com/questions/396145/how-to-vertically-center-a-div-for-all-browsers) - check out of the horror of CSS...

### Flexbox
- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)

### Positioning
`static`: default position of an element.

Each of the following other positions are positioned with `top, bottom, left, right` according to a reference point.

`relative`: repositioned relatively from where it would have been if it were position static.

`absolute`: parent container or first ancestor with a position != static.

`fixed`: relative to the viewport/window.

[Positioning demo](http://codepen.io/brettinternet/full/wgVMoX/)

#### Box Model + positioning
*Every element in web design is a rectangular box.*
height x width (content) + padding + border + margin

`width` <= width + padding-left + padding-right + border-left + border-right

`height` <= height + padding-top + padding-bottom + border-top + border-bottom

##### Block level boxes + `position static/relative`
* Implicit width = 100% default (includes border + padding)
* Explicit width = 100% default in addition to padding + border


##### `position absolute` boxes
No explicit width, only fit to contain children. - floated boxes w/o width behave similarly.

To avoid cross-browser issues, always set a width on anything floated, absolutely positioned, or fixed positioned.

`{box-sizing: content-box}` the default setting, the height and width are calculated to include only the content.
**`{box-sizing: border-box}` allows border and padding to be computed in the total space occupied by a box model.**


### Media Queries
### Mobile
Mobile browsers (especially on iOS) resize the viewport as the user scrolls the page. [This is not consistently handled across all browsers](https://github.com/bokand/URLBarSizing#proposed-changes-to-chrome).



# Icons
- [Multicolored icons with SVG symbols and CSS variables](https://medium.freecodecamp.org/lets-make-your-svg-symbol-icons-multi-colored-with-css-variables-cddd1769fca4)


# Design
- [State of Design](https://medium.com/@chopeh/the-state-of-design-ff5142fb806) - satire
