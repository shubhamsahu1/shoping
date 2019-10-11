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
      <article className="itemWraper">
        {cart.cartData.map((data, i) => (
          <div key={i} className="item">
            <img
              className="item--image"
              src={data.item.imageURL}
              alt={data.item.description}
            ></img>
            <div className="item-info">
              <h4 className="item-info--heading">{data.item.name}</h4>
              <div className="item-info-qty">
                <button
                  className="item-info-qty--icon icon icon--remove"
                  onClick={() => removeFromCart(data.item.id)}
                  aria-label={"remove one quantity"}
                ></button>

                <p>{data.qty}</p>
                <button
                  className="item-info-qty--icon icon icon--add"
                  onClick={() => addToCart(data.item.id)}
                  aria-label={"add one quantity"}
                ></button>
                <img src="/static/close.png" alt="close Cart"></img>
                <p>Rs. {data.item.price}</p>
                <strong className="item-total">
                  Rs. {data.item.price * data.qty}
                </strong>
              </div>
            </div>
          </div>
        ))}
        <div className="itemWraper-lowest">
          <img src="static/images/lowest-price.png" alt="lowest-price"></img>
          <p>You won't find cheaper anywhere</p>
        </div>
      </article>
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
