import React, { Component } from "react";

//components
import Gallery from "./Gallery";

class Search extends Component {
  componentDidMount() {
    this.props.onSearch(this.props.category);
  }

  render() {
    return (
      <div>
        {
          (this.props.loading)
            ? <p>Loading images...</p>
            : <Gallery data={this.props.images} category={this.props.category} />
        }
      </div>
    );
  }
}

export default Search;