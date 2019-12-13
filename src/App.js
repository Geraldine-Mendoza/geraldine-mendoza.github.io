import React, { Component } from 'react'
import Menu from './Menu'
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
	  	<div>
	  	<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
	      <Menu categories={this.state.menuCategories} />
	    </div>
	  );
	}
}

export default App
