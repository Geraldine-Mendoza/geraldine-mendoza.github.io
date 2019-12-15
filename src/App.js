import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Menu from './Menu'
import Home from './Home'
import Projects from './Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {

	render() {
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

		</Col>
		</Row>

		</Container>
		);

	}

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
  		name: 'Contact',
  	  subCat: []
  	},
  	{ 
  		name: 'Projects',
  	  subCat: []
  	}
  	]
  }

  render() {
	  return (
	  	<div style={{ "backgroundColor": "white"}}>
	  	
	      <Menu categories={this.state.menuCategories} />
	      <Home />
	      <Projects />
	      <Contact />
	      <div style={{height: "10vh"}}></div>
	    </div>
	  );
	}
}

export default App
