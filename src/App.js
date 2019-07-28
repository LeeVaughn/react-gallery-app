import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import apiKey from "./config.js";

// components
import Nav from "./components/Nav";
import Pandas from "./components/Pandas";
import Puppies from "./components/Puppies";
import Sunrises from "./components/Sunrises";
import Search from "./components/Search";
import Error from "./components/Error";

class App extends Component {

  // defines initial state
  state = {
    images: [],
    loading: true,
    perPage: 24
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
    return (
      // renders root router that listens to URL changes
      <BrowserRouter basename="/react-gallery-app">
        <div className="container">
          <Nav />
          {/* renders the first route that matches the path or the error route if no matching path is found */}
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/search" />} />
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
            <Route path="/sunrises" render={ () => <Sunrises
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            <Route path="/search" render={ () => <Search
              onSearch={this.performSearch}
              images={this.state.images}
              category={this.state.category}
              loading={this.state.loading} /> }
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
