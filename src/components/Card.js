import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { id, email, first_name, last_name, avatar } = this.props;
    return (
      <div key={id} className="card">
        <img className="card-img" src={avatar} alt="fothos" />
        <div className="card-body">
          <p>{first_name}</p>
          <p>{last_name}</p>
          <a href={email}>Email</a>
        </div>
      </div>
    );
  }
}

export default Card;
