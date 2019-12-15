import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Menu from './Menu'
import Home from './Home'
import Projects from './Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {

	return (
		<Container id="Contact">
		<Row className="justify-content-center">
			<h1>Contact</h1>
		</Row>
		<Row>
		<Col>
			<Button block href="https://github.com/Geraldine-Mendoza">
			<div className="button-div">
			<h3>Github</h3>
			</div>

			</Button>
		</Col>
		<Col>
		<Button block>
			<h3>LinkedIn</h3>
		</Button>
		</Col>
		<Col>
			<Button block>
			<div className="button-div">
			<h3>Email</h3>
			</div>

			</Button>
		</Col>
		</Row>

		</Container> );
}

function About() {
	return(
		<Jumbotron id="About" className="jumbo-about">
		<div>
		<h1 style={{"text-align": "center"}}>About Me</h1>
		<hr />
		<p style={{"text-align": "justify"}}>Wow im such an interesting person arent i how are you have you watched the show You? it was pretty interesting i gues i dunno i havent finished it yet and this is a paragraph, a group of related sentences. Wow im such an interesting person arent i how are you have you watched the show You? it was pretty interesting i gues i dunno i havent finished it yet and this is a paragraph, a group of related sentences. Wow im such an interesting person arent i how are you have you watched the show You? it was pretty interesting i gues i dunno i havent finished it yet and this is a paragraph, a group of related sentences</p>
		</div>
		</Jumbotron>
	)
}

class App extends Component {

  state = {
  	menuCategories: [
  	{ 
  		name: 'Home',
  	  subCat: []
  	},
  	{ 
  		name: 'About',
  	  subCat: []
  	},
  	{ 
  		name: 'Projects',
  	  subCat: []
  	},
  	{ 
  		name: 'Contact',
  	  subCat: []
  	}
  	]
  }

  render() {
	  return (
	  	<div>
	  	
	      <Menu categories={this.state.menuCategories} />
	      <Home />
	      <About />
	      <Projects />
	      <Contact />
	      <div style={{height: "10vh"}}></div>
	    </div>
	  );
	}
}

export default App
