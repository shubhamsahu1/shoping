import React from "react";
import { connect } from "react-redux";
import Item from "./item"
//import classnames from "classnames";


class Cart extends React.Component {
  state = {
   
  };
  componentDidMount() {
    
  }
  render() {
  
    return (
    <div className="cart">
      <div className="cart-myCart">
        <span className="cart-myCart--head">My Cart<span className="cart-myCart--sub">( 1 item)</span></span>
        <span className="close"></span>
      </div>
      <Item/>
    </div>     
    );
  }
}


const mapStateToProps = state => {
  return {
    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);