import React from 'react'

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="contact-container">
				<div className="contact-content">
					<h2 className="contact-text-title">Contact Our Agent</h2>
				</div>
				<form className="contact-form">
					<p className="contact-form-text">First Name</p>
					<input type="text" className="contact-input" />
					<p className="contact-form-text">Email</p>
					<input type="text" className="contact-input" />
					<p className="contact-form-text">Message</p>
					<textarea className="contact-message" />
					<button className="listing-button">Get In Contact!</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
