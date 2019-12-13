import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Menu.css';
import {
  Link
} from "react-router-dom";

function CatList(categories) {
	console.log(categories);
	const rows = categories.map((cat, index) => {
		return (
			<Nav.Link as={Link} to={"/" + cat.name}>{cat.name}
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
				<div>
				<Navbar bg="dark" expand="lg" variant="dark">
		  	<Navbar.Brand href="/">ME</Navbar.Brand>
		  	<Navbar.Toggle aria-controls="basic-navbar-nav" />
		  	<Navbar.Collapse id="basic-navbar-nav">
		    <Nav>
		      {CatList(categories)}
		    </Nav>
		  	</Navbar.Collapse>
				</Navbar>
      </div>
		);
	}
}

export default Menu