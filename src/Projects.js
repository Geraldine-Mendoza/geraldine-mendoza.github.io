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
			<Button variant="primary" 
			onClick={() => {openModalWith(project)}}>Learn More</Button>
			</Card.Body>
			</Card>
			</Col>
		);

	})
	return cards;
}

/*function ModalControl(allProjects){
	const [modalInitial, setModalControl] = useState([false, null]);

	return(
	<Row className="card-row">
	{ makeCards(allProjects, setModalControl, setModalProject) }
	<Modal show={modalInitial[0]} onHide={setModalControl([false, null])}>
		<Modal.Header closeButton />

		<Modal.Body>modalInitial[1].name</Modal.Body>


	</Modal>
	</Row>
	);

}*/

class Projects extends Component {

	state = {
		gitProjects: [
			{
				name: "Notes",
				shortDesciption: "This is short wow.",
				description: "Pretty notes app."
			},
			{
				name: "Reading Calendar",
				shortDesciption: "This is short wow.",
				description: "For annoying little kids."
			},
			{
				name: "Third Project",
				shortDesciption: "This is short wow.",
				description: "I don't know what this is."
			},
			{
				name: "Third Project",
				shortDesciption: "This is short wow.",
				description: "I don't know what this is."
			}
		],
		isModalOpen: false,
		openProject: {name: null, shortDesciption: null, description: null}
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
			openProject: {name: null, shortDesciption: null, description: null}
		})
	}

	/*
	setModalProject = project => {
		const currProject = this.state.currProject;
		this.setState({
			currProject: project
		})
	}

	startModalShow = () => {
		const setModalShow = this.state.setModalShow;
		this.setState({ setModalShow: true});
	}*/

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

		<Modal show={this.state.isModalOpen} 
		onHide={() => this.setState({gitProjects: this.state.gitProjects,
			isModalOpen: false,
			openProject: this.state.openProject})} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
			<Modal.Header closeButton />

			<Modal.Body>

			<h1>{this.state.openProject.name}</h1> <hr />
			<Image src={sample_project} />
			<p>{this.state.openProject.description}</p>

			</Modal.Body>
		</Modal>

		<Container className="card-deck mx-auto">
		{allProjects.map( (project, indx) => {
			return(
			<Col style={{"maxWidth": "330px", "paddingBottom": "2em", margin: "0 auto", "minWidth": "300px"}}>
			<Card className="project-card">
			<Card.Img variant="top" src={sample_project} />
			<Card.Body>
			<Card.Title>{project.name}</Card.Title>
			<Card.Text>
			{project.description}
			</Card.Text>
			<Button variant="primary" 
			onClick={() => {this.openModalWith(project)}}>Learn More</Button>
			</Card.Body>
			</Card>
			</Col>);})}
		</Container>

		{/*<makeModal 
			show={ModalShow} onHide={this.setState({setModalShow: false})}
			project={currProject} />*/}

		</div>
		);

	}


}


export default Projects