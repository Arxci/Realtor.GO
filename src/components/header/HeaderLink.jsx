import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLink = ({ path, text }) => {
	return (
		<li className="nav-list-link">
			<Link to={path}>{text}</Link>
		</li>
	)
}

HeaderLink.defaultProps = {
	path: '/',
	text: 'Link',
}

export default HeaderLink
