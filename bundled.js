$.getJSON("reviews.json", function (data) {
  $.each(data, function (key, val) {
    let name = val.customer_name;
    let age = val.customer_age;
    let product = val.product_name;
    let review = val.customer_review;
    let picture = val.customer_pic;
    $('.reviews').append(`<div class="reviews__item">
				
				<h3 class="reviews__item__name">${name}
				<span class="reviews__item__age">(${age})</span>
				</h3>
				<hr class="hr">
				<p class="reviews__product">Bought ${product} at IKEA</p>
				<p class="reviews__item__review">${review}</p>
				</div>
				`);
  });
});
