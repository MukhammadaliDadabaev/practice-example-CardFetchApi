import React, { Component } from "react";

import Cards from "./Cards";

class Main extends Component {
  state = {
    cards: [],
  };

  componentDidMount(){
    fetch("https://reqres.in/api/users?page=1")
    .then(respons => respons.json())
    .then(result => this.setState({cards: result.data}))
  }
  render() {
    return <div>
      <Cards cards={this.state.cards}/>
    </div>;
  }
}

export default Main;
