import React from 'react'
import HomeStats from '../../components/homeStats/HomeStats'
import Contact from '../contact/Contact'
import Listings from '../listings/Listings'
import Reviews from '../reviews/Reviews'

const Home = () => {
	return (
		<section id="home" className="home">
			<div className="home-section__banner">
				<div className="home-content">
					<h1 className="home-content-title">
						Hundreds of homes just a click away
					</h1>
					<h3 className="home-content-subtext">
						Voted 2022's leading world realtor
					</h3>
					<div className="home-content-search">
						<input
							className="home-content-search__input"
							placeholder="Search..."
						/>
						<button className="home-content-search__button">Search</button>
					</div>
				</div>
				<HomeStats />
			</div>
			<Listings />
			<Reviews />
			<Contact />
		</section>
	)
}

export default Home
