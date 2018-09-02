import React, { Component } from "react";
import SearchForm from "./SearchForm";

//components
import Gallery from "./Gallery";

class Search extends Component {
  componentDidMount() {
    this.props.onSearch(this.props.category);
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={this.performSearch} />
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