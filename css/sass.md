# Sass

### About Sass

> "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world." - From the [Sass website](http://sass-lang.com/).
>

Sass > Less for Ruby. Sass is built in Ruby. Sass has a lot more CSS3 helpers built in.

Sass is not the same as CSS, and it must be _compiled_ into CSS with Gulp, Sass cli app or webpack.

`.scss` is distinct from `.sass`. For example, `.sass` files don't use brackets.

### Features
- CSS compatible
- Feature rich
- Mature
- Industry approved
- Large community
- Frameworks

### Sass Guide
The Sass [guide](http://sass-lang.com/guide) is very easy to reference:

- Preprocessing
- Variables
- Nesting
- Partials
- Import
- Mixins
- Inheritance
- Operators

[Sass functions](http://sass-lang.com/documentation/Sass/Script/Functions.html): For example, a linear gradient in Sass is a single line of code whereas in CSS you would need to specify the gradient for each web browser. There's also a cool feature to darken or lighten a given shade:

```scss
color: darken(#369, 10%)
```

### Variables

Here is an example of variables in Sass:

```scss
$color: red;
div {
	color: $color;
}
```

Can define variables within scopes, but in Sass variables can be overwritten regardless of Scope

### Mixins

Mixins are blocks of reusable code, much like partials in Rails.

```scss
@mixin rounded-corners{
	border-radius: 10px;
}

#content{
	/*Styles*/
	@include rounded-corners
}
```

### Extending

If some of your classes have very similar or identical elements, you can extend them. This is similar to inheritance in Ruby.

```scss
.notice{
	background: green;
	text-align: center;
	color: white;
	@include rounded-corners;
}

.alert {
	@extend .notice;
	background: red;
}
```

This example allows notice and alert to share all the same features except for the background.

### Looping and math

[This demo](https://codepen.io/brettinternet/pen/aWvOeE) shows a loop that generates a rainbow all the way across the screen.

```scss
$max: 360;
@for $i from 0 to $max {
  .rainbow-#{$i} {
		position: absolute;
		$offsetY: (100% / $max) * $i;
		left: $offsetY;
		top: 0;
		bottom: 0;
		background: hsl($i, 100%, 50%);
		width: 1%;
  }
}
```

Read about the HSL function [here](http://sass-lang.com/documentation/Sass/Script/Functions.html#hsl-instance_method).

<!-- ### Creating a responsive grid in Sass

[Bootstrap](http://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/) use Sass to create their grid system. Let's create our own!

```scss
$page-width: 1200;
$columns: 12;
$number = $i + 1
for $i from 0 to $columns{
	.ground-#{$number} {
		width: (100% / $columns) * $number;
		background: lightblue;
		float: left;
		margin: 1px 0;
	}
}
```

We could make this responsive with media queries. -->

There's a CodeSchool course on [Sass](https://www.codeschool.com/courses/assembling-sass) and another [more advanced](https://www.codeschool.com/courses/assembling-sass-part-2) course. Reference the Sass [guide](http://sass-lang.com/guide) as you go.

### Partials

Main file called `styles.scss`. Then, split up your other styles by views as partials: `_homeView.scss`, `_productPage.scss`, and `_loginModal.scss`.

```scss
$blue: blue

@import "homeView";
@import "productPage";
@import "loginModal";
```


## Sass Frameworks
- [Breakpoint-sass](http://breakpoint-sass.com/)
- [Singularitygs](https://github.com/at-import/Singularity)
