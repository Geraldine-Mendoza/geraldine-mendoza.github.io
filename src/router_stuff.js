implementing router:

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

<Nav.Link as={Link} to={"/" + cat.name}>

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