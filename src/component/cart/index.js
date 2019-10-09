import React from "react";
import { connect } from "react-redux";
import Item from "./item";
import { toggleCart, checkout } from "./../../reducers";
import i18next from "i18next";

class Cart extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const { toggleCart, totalItem, totalValue, checkout } = this.props;
    return (
      <div className="cart">
        <section className="cart-myCart">
          <h3 className="cart-myCart--head">
            My Cart<span className="cart-myCart--sub">( {totalItem} item)</span>
          </h3>
          <button
            className="close"
            aria-label="close cart"
            autoFocus
            onClick={() => toggleCart()}
          ></button>
        </section>
        {totalItem > 0 ? (
          <div className="cart-items">
            <Item />
          </div>
        ) : (
          <section className="cart-noItem">
            <h4 className="cart-noItem--header">
              {i18next.t("No Item in your cart")}
            </h4>
            <p className="cart-noItem--sub">
              {i18next.t("your favourite items are just click away")}
            </p>
          </section>
        )}
        <div className="cart-footer">
          {totalItem > 0 ? (
            <React.Fragment>
              <p className="cart-footer--promo">
                {i18next.t("Promo can be applied on payment page")}
              </p>
              <button
                className="cart-footer-checkout"
                onClick={() => checkout()}
              >
                <p>{i18next.t("Proceed to Checkout")}</p>
                <p>Rs.{totalValue}</p>
              </button>
            </React.Fragment>
          ) : (
            <button
              className="cart-footer-checkout cart-footer--start"
              onClick={() => checkout()}
            >
              {i18next.t("Start Shopping")}
            </button>
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
