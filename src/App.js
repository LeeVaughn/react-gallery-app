import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

import apiKey from "./config.js";

export default class App extends Component {

  // defines initial state
  constructor() {
    // allows the use of this inside the construtor within the context of the App class
    super();
    this.state = {
      images: [],
      loading: true,
      perPage: 24
    }
  }

  // runs as soon as App is mounted to the DOM
  componentDidMount() {
    this.performSearch();
  }

  // handles API request
  performSearch = (query = "beach") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&in_gallery=&per_page=${this.state.perPage}&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        this.setState({
          images: response.data.photos.photo,
          category: {query},
          loading: false
        });
      })
      .catch(error => {
        // handle error
        console.error("Error fetching and parsing data", error)
      });
  }

  render() {
    console.log(this.state.images);
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
