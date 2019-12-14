import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Menu.css';

function CatList(categories) {
	console.log(categories);
	const rows = categories.map((cat, index) => {
		return (
			<Nav.Link href={"#" + cat.name}>{cat.name}
			</Nav.Link>
		);
	})

	return rows;

}

class Menu extends Component {

	render() {
		const { categories } = this.props;
		console.log(categories);
		return (

				<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
		  	<Navbar.Brand href="#Home">ME</Navbar.Brand>
		  	<Navbar.Toggle aria-controls="basic-navbar-nav" />
		  	<Navbar.Collapse id="basic-navbar-nav">
		    <Nav>
		      {CatList(categories)}
		    </Nav>
		  	</Navbar.Collapse>
				</Navbar>

		);
	}
}

export default Menu