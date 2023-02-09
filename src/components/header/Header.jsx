import React from 'react'

import HeaderLink from './HeaderLink'

const Header = () => {
	return (
		<header className="header container">
			<nav className="header-nav">
				<h1 className="header-logo">Realtor.GO</h1>
				<ol className="nav-list hide-for-mobile">
					<HeaderLink path="/" text="Home" />
					<HeaderLink path="/" text="Listings" />
					<HeaderLink path="/" text="Contact" />
				</ol>
			</nav>
		</header>
	)
}

export default Header
