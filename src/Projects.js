import React, { Component, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import sample_project from './rectangle.svg'
import './Projects.css';

// need to have with in or something
function makeCards(projects, openModalWith) {

	const cards = projects.map( (project, indx) => {
		return(
			<Col style={{"max-width": "330px", "padding-bottom": "2em", margin: "0 auto", "min-width": "300px"}}>
			<Card className="project-card">
			<Card.Img variant="top" src={sample_project} />
			<Card.Body>
			<Card.Title>{project.name}</Card.Title>
			<Card.Text>
			{project.description}
			</Card.Text>
			<Button className="project-button" variant="primary" 
			onClick={() => {openModalWith(project)}}>Learn More</Button>
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
				name: "Pretty Notes",
				shortDescription: "A note-taking app created to keep text snippets in a clean, minimalist space.",
				description: "Pretty notes app.",
			},
			{
				name: "Track-Your-Reading",
				shortDescription: "An app for younger students to track their reading through calendar, achievement and shelf features.",
				description: "For annoying little kids."
			},
			{
				name: "Github-hub",
				shortDescription: "A website allowing employers to check the quality of a Github user's code through complexity metrics.",
				description: "I don't know what this is."
			},
			{
				name: "Blink",
				shortDescription: "A website designed to measure your blink-rate while using a computer, helping you determine if this metric puts you at risk for dry eyes.",
				description: "I don't know what this is."
			}
		],
		isModalOpen: false,
		openProject: {name: null, shortDescription: null, description: null}
	}

	openModalWith(item) {
		this.setState({
			gitProjects: this.state.gitProjects,
			isModalOpen: true,
			openProject: item
		})
	}

	hideModal() {
		console.log(this.state.gitProjects);
		this.setState({
			gitProjects: this.state.gitProjects,
			isModalOpen: false,
			openProject: {name: null, shortDescription: null, description: null}
		})
	}

	render() {
		const allProjects = this.state.gitProjects;
		//console.log(allProjects)
		//const ModalShow = this.state.setModalShow;
		//const currProject = this.state.currProject;
		return (
		<div id="Projects" className="projects-all">
		<div className="projects-overview">
			<h1>Projects</h1>
		</div>

		<Modal 
			show={this.state.isModalOpen} 
			onHide={() => this.setState({gitProjects: this.state.gitProjects,
				isModalOpen: false,
				openProject: this.state.openProject})} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
			<Modal.Header closeButton />

			<Modal.Body>

			<h1>{this.state.openProject.name}</h1> <hr />
			<div className="modal-image">
			<Image src={sample_project} />
			</div>
			<p>{this.state.openProject.description}</p>

			</Modal.Body>
		</Modal>

		<Container className="card-deck mx-auto">
		<Row className="card-row">
		{allProjects.map( (project, indx) => {
			return(
			<Col style={{"maxWidth": "380px", "paddingBottom": "2em", margin: "0 auto", "minWidth": "300px"}}>
			<Card className="project-card">
			<Card.Img variant="top" src={sample_project} />
			<Card.Body>
			<Card.Title>{project.name}</Card.Title>
			<Card.Text>
			{project.shortDescription}
			</Card.Text>
			<Button variant="primary" 
			onClick={() => {this.openModalWith(project)}}>Learn More</Button>
			</Card.Body>
			</Card>
			</Col>);})}
		</Row>
		</Container>

		{/*<makeModal 
			show={ModalShow} onHide={this.setState({setModalShow: false})}
			project={currProject} />*/}

		</div>
		);

	}


}


export default Projects