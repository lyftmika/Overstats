import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <ul className="hexagon-container">
          <li className="hexagon hex_1" />
          <li className="hexagon hex_2" />
          <li className="hexagon hex_3" />
          <li className="hexagon hex_4" />
          <li className="hexagon hex_5" />
          <li className="hexagon hex_6" />
          <li className="hexagon hex_7" />
        </ul>
      </div>
    );
  }
}

export default Loader;
