import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../../reducers";
//import classnames from "classnames";

class Item extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const { cart, addToCart, removeFromCart } = this.props;
    return (
      <div className="itemWraper">
        {cart.cartData.map((data, i) => (
          <div key={i} className="item">
            <img
              className="item--image"
              src={data.item.imageURL}
              alt={data.item.description}
            ></img>
            <div className="item-info">
              <div className="item-info--heading">{data.item.name}</div>
              <div className="item-info-qty">
                <img
                  src="/static/remove.png"
                  className="item-info-qty--icon"
                  alt="remove item"
                  onClick={() => removeFromCart(data.item.id)}
                ></img>

                <span>{data.qty}</span>
                <img
                  src="/static/add.png"
                  className="item-info-qty--icon"
                  alt="add one more item"
                  onClick={() => addToCart(data.item.id)}
                ></img>
                <img src="/static/close.png" alt="close Cart"></img>
                <span>Rs. {data.item.price}</span>
                <span className="item-total">
                  Rs. {data.item.price * data.qty}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="item-lowest">
          <img src="static/images/lowest-price.png" alt="lowest-price"></img>
          <span>You won't find cheaper anywhere</span>
        </div>
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
