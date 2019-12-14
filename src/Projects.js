import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import sample_project from './rectangle.svg'
import './Projects.css';

function makeCards(projects) {

	const cards = projects.map( (project, indx) => {
		return(
			<Card className="project-card mx-auto">
			<Card.Img variant="top" src={sample_project} />
			<Card.Body>
			<Card.Title>{project.name}</Card.Title>
			<Card.Text>
			{project.description}
			</Card.Text>
			<Button variant="primary">Learn More</Button>
			</Card.Body>
			</Card>
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
			}
		]
	}

	render() {
		return (
		<div id="Projects" className="projects-all">
		<div className="projects-overview">
			<h1>Projects</h1>
		</div>
		<CardDeck className="card-deck p-3 mx-auto">
			{makeCards(this.state.gitProjects)}
			</CardDeck>
		</div>
		);

	}


}


export default Projects