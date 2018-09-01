import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

class App extends Component {

  state = {
    
  }

  render() {
    return (
      // renders root router that listens to URL changes
      <BrowserRouter>
        <div className="container">
          <Nav />

          {/* renders the first route that matches the path or the error route if no mathching path is found */}
          <Switch>
            <Route exact path="/" />
            <Route path="/gallery" render={ () => <Gallery searchTerm="Dog" /> } />
            <Route path="/notfound" component={NotFound} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
