import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import profilepic from './prom_profile.jpeg'
import './Home.css';

class Home extends Component {

	render() {
		const { categories } = this.props;
		console.log(categories);
		return (
		<div id="Home" className="home-and-button">
		<div className=" home-all">
			<Container  className="mt-lg-4 mt-md-5 mt-sm-1 mt-xs-1">
			<Row className="justify-content-md-center">
			<Col className="profile no-gutters">
				<Image src={profilepic} alt="Geraldine Mendoza" thumbnail className="profilepic" roundedCircle />
			</Col>
			<Col className="md-5 about-me">
				<p> <b>Geraldine Mendoza </b><br />
				University of Waterloo <br />
				Candidate for B.A.Sc in Honours Computer Science</p>
				
			</Col>
			</Row>
			</Container>
		</div>
		</div>
		);
	}
}

export default Home