import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import sample_project from './rectangle.svg'
import './Projects.css';

function makeCards(projects) {

	const cards = projects.map( (project, indx) => {
		return(
			<Col style={{width: "100%", padding: "0px"}}>
			<Card className="project-card">
			<Card.Img variant="top" src={sample_project} />
			<Card.Body>
			<Card.Title>{project.name}</Card.Title>
			<Card.Text>
			{project.description}
			</Card.Text>
			<Button variant="primary">Learn More</Button>
			</Card.Body>
			</Card>
			</Col>
		);

	})
	return cards;
}

class Projects extends Component {

	state = {
		gitProjects: [
			{
				name: "Notes",
				description: "Pretty notes app."
			},
			{
				name: "Reading Calendar",
				description: "For annoying little kids."
			},
			{
				name: "Third Project",
				description: "I don't know what this is."
			},
			{
				name: "Third Project",
				description: "I don't know what this is."
			}
		]
	}

	render() {
		return (
		<div id="Projects" className="projects-all">
		<div className="projects-overview">
			<h1>Projects</h1>
		</div>

		<Container className="card-deck mx-auto">
		<Row className="card-row">
			{makeCards(this.state.gitProjects)}
			</Row>
		</Container>

		</div>
		);

	}


}


export default Projects