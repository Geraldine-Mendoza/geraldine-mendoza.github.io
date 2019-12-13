import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Home.css';

class Home extends Component {

	render() {
		const { categories } = this.props;
		console.log(categories);
		return (
		<div>
			<Jumbotron fluid>
				<p> Hi pls hire me </p>
			</Jumbotron>
		</div>
		);
	}
}

export default Home