import React, { Component } from 'react'
import Menu from './Menu'
import Home from './Home'
import Projects from './Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
	  	<div style={{ "background-color": "white"}}>
	  	
	      <Menu categories={this.state.menuCategories} />
	      <Home />
	      <Projects />

	    </div>
	  );
	}
}

export default App
