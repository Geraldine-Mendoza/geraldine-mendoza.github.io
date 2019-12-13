import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function makeCards(projects) {

	const cards = projects.map( (project, indx) => {
		return(
			<Card> {/*style={{ width: '18rem' }}*/}
			<Card.Img variant="top" src="holder.js/100px180" />
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
		<div>
			{makeCards(this.state.gitProjects)}
		</div>
		);

	}


}


export default Projects