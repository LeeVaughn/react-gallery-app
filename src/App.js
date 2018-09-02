import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Search from "./components/Search";
import Pandas from "./components/Pandas";
import Puppies from "./components/Puppies";
import Sunsets from "./components/Sunsets";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import apiKey from "./config.js";

class App extends Component {

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
  performSearch = (query = "dogs surfing") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&in_gallery=&per_page=${this.state.perPage}&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        this.setState({
          images: response.data.photos.photo,
          category: query,
          loading: false
        });
      })
      .catch(error => {
        // handle error
        console.error("Error fetching and parsing data", error)
      });
  }

  render() {
    console.log(this.state.images)
    return (
      // renders root router that listens to URL changes
      <BrowserRouter>
        <div className="container">
          <Nav onSearch={this.performSearch} />

          {/* renders the first route that matches the path or the error route if no mathching path is found */}
          <Switch>
            <Route exact path="/" />
            <Route path="/search" render={ () => <Search
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            <Route path="/pandas" render={ () => <Pandas
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            <Route path="/puppies" render={ () => <Puppies
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            <Route path="/sunsets" render={ () => <Sunsets
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            {/* <Route path="/gallery" render={ () => <Gallery data={this.state.images} category={this.state.category} /> } /> */}
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
