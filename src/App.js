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
		<Row className="justify-content-center">
		<Col style={{'minWidth': '260px'}}>
		<a href="https://github.com/Geraldine-Mendoza">
		<Button style={{'background-color':'#9ca6d9 !important'}} block>
			<h3>Github</h3>
		</Button>
		</a>
		</Col>
		<Col style={{'minWidth': '260px'}}>
		<Button block>
			<h3>LinkedIn</h3>
		</Button>
		</Col>
		<Col style={{'minWidth': '260px'}}>
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
		<p style={{"text-align": "justify"}}>Hi, I'm Geraldine Mendoza, a Computer Science student at the University of Waterloo. I was born in Colombia and later moved to Canada; I'm currently in my 1A term. I'm interested in web-design, 

			I love learning :( </p>
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
	      {/*<About />*/}
	      <Projects />
	      <Contact />
	      <div style={{height: "8vh"}}></div>
	    </div>
	  );
	}
}

export default App
