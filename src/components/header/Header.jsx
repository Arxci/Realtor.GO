import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import HeaderLink from './HeaderLink'

const Header = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	useEffect(() => {
		function OnResize() {
			if (window.innerWidth >= 1120) {
				setHamburgerOpen(false)
			}
		}

		window.addEventListener('resize', () => OnResize())

		return () => window.removeEventListener('resize', () => OnResize())
	}, [])

	return (
		<header className="header ">
			<nav className="header-nav container">
				<Link to="#home" onClick={() => setHamburgerOpen(false)}>
					<h1 className="header-logo">Realtor.GO</h1>
				</Link>
				<ol className="nav-list hide-for-mobile">
					<HeaderLink path="/#home" text="Home" />
					<HeaderLink path="/#listings" text="Listings" />
					<HeaderLink path="/#reviews" text="Reviews" />
					<HeaderLink path="/" text="Contact" />
				</ol>
				<i
					onClick={() => setHamburgerOpen(!hamburgerOpen)}
					className="nav-hamburger fa-solid fa-bars hide-for-desktop"
				></i>
			</nav>
			<div className={hamburgerOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
				<ol className="hamburger-list">
					<HeaderLink
						path="/#home"
						text="Home"
						onPressed={() => setHamburgerOpen(false)}
					/>
					<HeaderLink
						path="/#listings"
						text="Listings"
						onPressed={() => setHamburgerOpen(false)}
					/>
					<HeaderLink
						path="/#reviews"
						text="Reviews"
						onPressed={() => setHamburgerOpen(false)}
					/>
					<HeaderLink
						path="/"
						text="Contact"
						onPressed={() => setHamburgerOpen(false)}
					/>
				</ol>
			</div>
		</header>
	)
}

export default Header
