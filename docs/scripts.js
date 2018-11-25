//Getting the json data from "reviews.json" file
$.getJSON("reviews.json", function (data) {
  //Looping through the json data array and storing the values in variables
	$.each(data, function (key, val) {
    const name = val.customer_name,
     	  age = val.customer_age,
     	  product = val.product_name,
     	  review = val.customer_review,
     	  picture = val.customer_pic,
	 	  ratings = val.rating;
	  //Adding the data to the DOM
    $('.reviews').append(
	//Building the template with ES6 template literal and passing the values to DOM element
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
  });
});
