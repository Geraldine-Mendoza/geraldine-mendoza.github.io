import React, { Component } from 'react'
import Menu from './Menu'
import Home from './Home'
import Projects from './Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
	  	<Router>
	  	<div>
	  	
	      <Menu categories={this.state.menuCategories} />

	      <Switch>
          {/** <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>*/}
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Switch>
	    </div>
	    </Router>
	  );
	}
}

export default App
