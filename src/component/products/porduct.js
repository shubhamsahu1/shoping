import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./../../reducers";

class Product extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    const { name, imageURL, description, price, addToCart, id } = this.props;
    return (
      <div className="productWraper">
        <h4 className="heading">
          <strong>{name}</strong>
        </h4>

        <div className="productImgInfo destopTab">
          <img className="productImg" src={imageURL} alt={name}></img>
          <div className="productInfo">{description + " image"}</div>
        </div>
        <div className="productImgInfo mobile">
          <img className="productImg" src={imageURL} alt={name}></img>
          <div className="productInfoPrice">
            <div className="productInfo">{description + " image"}</div>
            <div className="priceWrap">
              <button className="buyNow" onClick={() => addToCart(id)}>
                Buy Now @ Rs.{price}
              </button>
            </div>
          </div>
        </div>
        <div className="priceWrap destop">
          <span className="productMrp">MRP Rs.{price}</span>
          <button className="buyNow" onClick={() => addToCart(id)}>
            Buy Now
          </button>
        </div>
        <div className="priceWrap tab">
          <button className="buyNow" onClick={() => addToCart(id)}>
            Buy Now @ Rs.{price}
          </button>
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
