import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
	return (
		<footer className="footer">
			<nav className="footer-nav container">
				<Link to="#home">
					<h1 className="header-logo">Realtor.GO</h1>
				</Link>
			</nav>
		</footer>
	)
}

export default Footer
