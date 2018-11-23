
	
	$.getJSON("reviews.json", function(data){
		$.each(data, function(key, val){
			
			let name = val.customer_name;
			let age = val.customer_age;
			let product = val.product_name;
			let review = val.customer_review;
			let picture = val.customer_pic;

			$('.reviews')
				.append(`<div class="reviews__item">
				
				<h1 class="reviews__item__name">${name}
				(<span class="reviews__item__age">${age}</span>)
				</h1>
				<p class="reviews__item__review">${review}</p>
				</div>
				`);
			
		});
	});
	
	
