import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  state = {};
  render() {
    const { cards } = this.props;
    return <div className="cards">
			{cards.map(card => (
				<Card key={card.id} {...card}/>
			))}
		</div>;
  }
}

export default Cards;
