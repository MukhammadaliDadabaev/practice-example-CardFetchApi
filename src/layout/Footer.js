import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="card-footer">
        <div className="footer-img"></div>
        <h3>A hosted REST-API ready to respond to your AJAX requests.</h3>
        <p>&copy; {new Date().getFullYear()} Copyright</p>
      </div>
    );
  }
}

export default Footer;
