import React from "react";
import { connect } from "react-redux";
import Item from "./item";
import { toggleCart, checkout } from "./../../reducers";
//import classnames from "classnames";

class Cart extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const { toggleCart, totalItem, totalValue, checkout } = this.props;
    return (
      <div className="cart">
        <div className="cart-myCart">
          <span className="cart-myCart--head">
            My Cart<span className="cart-myCart--sub">( {totalItem} item)</span>
          </span>
          <span className="close" onClick={() => toggleCart()}></span>
        </div>
        {totalItem > 0 ? (
          <div className="cart-items">
            <Item />
          </div>
        ) : (
          <div className="cart-noItem">
            <div className="cart-noItem--header">No Item in your cart</div>
            <div className="cart-noItem--sub">
              your favourite items are just click away
            </div>
          </div>
        )}
        <div className="cart-footer">
          {totalItem > 0 ? (
            <React.Fragment>
              <div className="cart-footer--promo">
                Promo can be applied on payment page
              </div>
              <div className="cart-footer-checkout" onClick={() => checkout()}>
                <span>Proceed to Checkout</span>
                <span>Rs.{totalValue}</span>
              </div>
            </React.Fragment>
          ) : (
            <div
              className="cart-footer-checkout cart-footer--start"
              onClick={() => checkout()}
            >
              <span>Start Shopping</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalItem: state.cart.totalItem,
    totalValue: state.cart.cartTotal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart()),
    checkout: () => dispatch(checkout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
