import React from 'react'
import Review from '../../components/review/Review'

const Reviews = () => {
	const reviews = require('../../data/data.json').reviews

	return (
		<section id="reviews" className="reviews">
			<div className="reviews-content">
				<div>
					<h2 className="reviews-text__title">Don't just hear it from us...</h2>
				</div>
				<div className="reviews-wrapper">
					{reviews &&
						reviews.map((review) => (
							<Review key={review.key} review={review} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Reviews
