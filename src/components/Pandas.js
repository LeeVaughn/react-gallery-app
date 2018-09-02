import React, { Component } from "react";

//components
import Nav from "./Nav";
import Gallery from "./Gallery";

class Pandas extends Component {
  componentDidMount() {
    this.props.onSearch("Pandas");
  }

  render() {
    console.log(this.props.images);
    return (
      <div>
        <Nav />
        {
          (this.props.loading)
            ? <p>Loading images...</p>
            : <Gallery data={this.props.images} category={this.props.category} />
        }
      </div>
    );
  }
}

export default Pandas;
