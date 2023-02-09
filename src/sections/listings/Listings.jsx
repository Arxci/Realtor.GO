import React, { useState } from 'react'
import Listing from '../../components/listing/Listing'
import ReactPaginate from 'react-paginate'

const Listings = () => {
	const listings = require('../../data/data.json').mostPopularHomes
	const [itemOffset, setItemOffset] = useState(0)
	const itemsPerPage = 6
	var currentItems = null

	const endOffset = itemOffset + itemsPerPage
	currentItems = listings.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(listings.length / itemsPerPage)

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % listings.length

		setItemOffset(newOffset)
	}

	return (
		<div className="listings">
			<div className="listings-container">
				<div className="listings-wrapper">
					<div className="listings-text">
						<h2 className="listings-text__title">Most Looked At Homes</h2>
					</div>
					<div className="listings-content">
						{currentItems &&
							currentItems.map((listing) => (
								<Listing key={listing.key} listing={listing} />
							))}
					</div>
					<div id="container" className="pagination">
						<ReactPaginate
							breakLabel="..."
							nextLabel={<i className="fa-solid fa-arrow-right"></i>}
							onPageChange={handlePageClick}
							pageRangeDisplayed={2}
							marginPagesDisplayed={1}
							pageCount={pageCount}
							previousLabel={<i className="fa-solid fa-arrow-left"></i>}
							containerClassName="pagination"
							previousClassName="previous__link"
							nextClassName="next__link"
							previousLinkClassName={'pagination__link'}
							nextLinkClassName={'pagination__link'}
							disabledClassName={'pagination__link--disabled'}
							activeClassName={'pagination__link--active'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Listings
