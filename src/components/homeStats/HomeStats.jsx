import React from 'react'

const HomeStats = () => {
	return (
		<div className="home-stats">
			<div className="home-stats__container">
				<div className="home-stats__wrapper">
					<ol className="home-stats__list">
						<li className="home-stats__list-item">
							<i className="fa-solid fa-house"></i>
							<p>300K Listings</p>
						</li>
						<li className="home-stats__list-item">
							<i className="fa-solid fa-user"></i>
							<p>10 Million Customers</p>
						</li>
						<li className="home-stats__list-item">
							<i className="fa-solid fa-location-dot"></i>
							<p>Worldwide Locations</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	)
}

export default HomeStats
