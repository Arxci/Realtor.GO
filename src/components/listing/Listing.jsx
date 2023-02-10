import React from 'react'
import { motion } from 'framer-motion'

const Listing = ({ listing }) => {
	const item = {
		hidden: { y: 5, opacity: 0.7, scale: 0.95 },
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
		},
	}

	return (
		<motion.div
			variants={item}
			initial="hidden"
			animate="visible"
			className="listing"
		>
			<div className="listing-image">
				<img loading="lazy" src={listing.image} alt="listing" />
			</div>
			<div className="listing-wrapper">
				<div className="listing-content">
					<h4 className="listing-text__title">{listing.location}</h4>
					<p className="listing-text__date">{listing.datePosted}</p>
				</div>
				<div className="listing-details">
					<button className="listing-button">Learn More</button>
					<p className="listing-text__price">{listing.price}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default Listing
