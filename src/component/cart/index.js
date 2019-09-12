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
        <span className="cart-myCart--head">My Cart<span className="cart-myCart--sub">( {totalItem} iitem)</span></span>
        <span className="close" onClick={()=>toggleCart()}></span>
      </div>
      <Item/>
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
    toggleCart: () => toggleCart()
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);