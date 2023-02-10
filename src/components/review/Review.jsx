import React from 'react'

const Review = ({ review }) => {
	return (
		<div className="review">
			<div className="review-wrapper">
				<div className="review-top">
					<img
						className="review-image"
						src={review.avatar}
						loading="lazy"
						alt="avatar"
					/>
					<h4 className="review-text-name">{review.name}</h4>
					<p className="review-text-date">{review.date}</p>
				</div>
				<p className="review-text-rating">Rating: {review.rating}</p>
				<p className="review-text-review">{review.review}</p>
			</div>
		</div>
	)
}

export default Review
