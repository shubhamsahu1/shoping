import React from "react";
import { connect } from "react-redux";
import Offer from "./offer";
import Card from "./card";
import {setCategories} from './../../modules'


class Products extends React.Component {
  
  componentWillMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <div className="homePageWraper">
        <Offer />
        <div className="shadowSaprater"></div>
        {this.props.cardData
          .sort((a, b) => a.order - b.order)
          .map(card =>
            card.enabled ? (
              <React.Fragment key={card.key}>
                <Card
                  url={card.imageUrl}
                  heading={card.name}
                  info={card.description}
                  btnLable={"Explore-" + card.key}
                  rowRev={card.order % 2}
                />
                <div className="shadowSaprater"></div>
              </React.Fragment>
            ) : null
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.api.categories
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)
