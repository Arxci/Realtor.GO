import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HeaderLink = ({ path, text, onPressed }) => {
	return (
		<li className="nav-list-link" onClick={() => onPressed()}>
			<Link to={path}>{text}</Link>
		</li>
	)
}

HeaderLink.defaultProps = {
	path: '/',
	text: 'Link',
	onPressed: () => {},
}

export default HeaderLink
