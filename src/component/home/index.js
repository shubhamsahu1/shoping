import React from "react";
import { connect } from "react-redux";
import Offer from "./offer";
import Card from "./card";
import { setCategories } from "./../../reducers";

class Products extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <section className="home">
        <Offer />
        <div className="home-shadowSaprater"></div>
        {this.props.cardData
          .sort((a, b) => a.order - b.order)
          .map(card =>
            card.enabled ? (
              <React.Fragment key={card.id}>
                <Card
                  url={card.imageUrl}
                  heading={card.name}
                  info={card.description}
                  btnLable={"Explore-" + card.key}
                  rowRev={card.order % 2}
                  cardId={card.id}
                />
                <div className="home-shadowSaprater"></div>
              </React.Fragment>
            ) : null
          )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.api.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
