import React, { Component } from "react";

//components
import Gallery from "./Gallery";

class Pandas extends Component {
  componentDidMount() {
    this.props.onSearch("Pandas");
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

export default Pandas;
