import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="card-header">
          <h1>Test your front-end against a real API</h1>
        </div>
        <div className="header-img"></div>
      </header>
    );
  }
}

export default Header;
