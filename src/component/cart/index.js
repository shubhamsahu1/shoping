import React from "react";
import { connect } from "react-redux";
import Item from "./item"
import {toggleCart} from './../../modules'
//import classnames from "classnames";


class Cart extends React.Component {
  state = {
   
  };
  componentDidMount() {
    
  }
  render() {
  const {toggleCart,totalItem} = this.props
    return (
    <div className="cart">
      <div className="cart-myCart">
        <span className="cart-myCart--head">My Cart<span className="cart-myCart--sub">( {totalItem} item)</span></span>
        <span className="close" onClick={()=>toggleCart()}></span>
      </div>
      <Item/>
      <div className="cart-footer">
        <div className="cart-footer--promo">Promo can be applied on payment page</div>
        <div className="cart-footer-checkout">
          <span>Proceed to Checkout</span>
          <span>total</span>
        </div>
      </div>
    </div>     
    );
  }
}


const mapStateToProps = state => {
  return {
    totalItem:state.cart.totalItem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);