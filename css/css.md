# Resources

### CSS Tours
- [GitHub's CSS](http://markdotto.com/2014/07/23/githubs-css/)
- [Lonely Planet's CSS](http://ianfeather.co.uk/css-at-lonely-planet/)
- [CodePen](https://codepen.io/chriscoyier/post/codepens-css)


# Positioning
`static`: default position of an element.

Each of the following other positions are positioned with `top, bottom, left, right` according to a reference point.

`relative`: repositioned relatively from where it would have been if it were position static.

`absolute`: parent container or first ancestor with a position != static.

`fixed`: relative to the viewport/window.

[Positioning demo](http://codepen.io/brettinternet/full/wgVMoX/)

## Box Model + positioning
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


# Media Queries
## Mobile
Mobile browsers (especially on iOS) resize the viewport as the user scrolls the page. [This is not consistently handled across all browsers](https://github.com/bokand/URLBarSizing#proposed-changes-to-chrome).
