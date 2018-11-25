# Reviews section overview

The project assumes that we receive datas from database.
These datas are about customers who already bought a product and provided at least 4 stars review.
Then datas converted to json data, which is stored in "reviews.json" file.

## Getting the data and showing on the screen

In "scripts.js" getting the JSON data and passing further with function:

```javascript
$.getJSON("reviews.json", function (data) 
```

Then we can loop through the passed JSON data and store them in variables:
```javascript
$.each(data, function (key, val) {
    const name = val.customer_name,
     	  age = val.customer_age,
     	  product = val.product_name,
     	  review = val.customer_review,
     	  picture = val.customer_pic,
	 	  ratings = val.rating;
```

Then it can  be append to the DOM with Javascript template literal:
```javascript
$('.reviews').append(
				`<div class="reviews__item">
				<h3 class="reviews__item__name">${name}
				<span class="reviews__item__age">(${age})</span>
				</h3>
				<p class="reviews__item__product">Bought <a class="product-link" href="#">${product}</a></p>
				<p class="reviews__item__review">${review}</p>
				<p>${ratings == 4  ? '<img class="stars" src="stars/4stars.jpg" alt="Rating">' : ''}
				   ${ratings == 5  ? '<img class="stars" src="stars/5stars.jpg" alt="Rating">' : ''}
				</p>
				</div>
				`);
```

## Styling the reviews
I used [BEM](https://en.bem.info/methodology/) naming convention, giving each element a logical classname.
I started with implementing [Normalize.css](https://necolas.github.io/normalize.css/).
Installed [PostCSS](https://postcss.org/) with [Gulp](https://gulpjs.com/) during the styling so I was able to use variables, 
indentings, mixins and other features that PostCSS can provide.
Also I used media queries to make it responsive 
so users can enjoy the reviews in every devices!

## See it in real
Please have a look at [IKEA-Reviews](https://tyby84.github.io/ikea-reviews/)!
