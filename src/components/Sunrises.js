import React, { Component } from "react";

//components
import Gallery from "./Gallery";

class Sunrises extends Component {
  componentDidMount() {
    this.props.onSearch("Sunrises");
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

export default Sunrises;
