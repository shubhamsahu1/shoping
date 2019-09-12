import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../../modules";
//import classnames from "classnames";

class Item extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const { cart, addToCart, removeFromCart } = this.props;
    return (
      <div className="itemWraper">
        {cart.cartData.map(data => (
          <div className="item">
            <img
              className="item--image"
              src={data.item.imageURL}
              alt="Smiley face"
            ></img>
            <div className="item-info">
              <div className="item-info--heading">{data.item.name}</div>
              <div className="item-info-qty">
                <img
                  src="/static/remove.png"
                  className="item-info-qty--icon"
                  alt="remove"
                  onClick={() => removeFromCart(data.item.id)}
                ></img>

                <span>{data.qty}</span>
                <img
                  src="/static/add.png"
                  className="item-info-qty--icon"
                  alt="remove"
                  onClick={() => addToCart(data.item.id)}
                ></img>
                <img src="/static/close.png" alt="remove"></img>
                <span>Rs. {data.item.price}</span>
                <span className="item-total">
                  Rs. {data.item.price * data.qty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
