import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./../../modules";

class Product extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    const { name, imageURL, description, price, addToCart, id } = this.props;
    return (
      <div className="productWraper">
        <div className="heading">
          <strong>{name}</strong>
        </div>

        <div className="productImgInfo destopTab">
          <img className="productImg" src={imageURL} alt="Smiley face"></img>
          <div className="productInfo">{description}</div>
        </div>
        <div className="productImgInfo mobile">
          <img className="productImg" src={imageURL} alt="Smiley face"></img>
          <div className="productInfoPrice">
            <div className="productInfo">{description}</div>
            <div className="priceWrap">
              <div className="buyNow" onClick={() => addToCart(id)}>BuyNow @ Rs.{price}</div>
            </div>
          </div>
        </div>
        <div className="priceWrap destop">
          <div className="productMrp">MRP Rs.{price}</div>
          <div className="buyNow" onClick={() => addToCart(id)}>
            BuyNow
          </div>
        </div>
        <div className="priceWrap tab">
          <div className="buyNow" onClick={() => addToCart(id)}>BuyNow @ Rs.{price}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
