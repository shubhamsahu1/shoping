import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { toggleCart } from "./../../reducers";

const Header = props => (
  <header className="wraper">
    <img
      src={"/static/images/logo.png"}
      className="logo"
      alt="sabka bajaar"
    ></img>
    <div className="center">
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
    </div>
    <div className="right">
      <div className="loginSection">
        <Link to="/login">SignIn</Link>
        <Link to="/register">Register</Link>
      </div>
      <button className="cart-wraper" onClick={() => props.toggleCart()}>
        <img src={"/static/images/cart.svg"} alt="cart"></img>
        <span>{props.totalItem} items</span>
      </button>
    </div>
  </header>
);

const mapStateToProps = state => ({
  totalItem: state.cart.totalItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleCart: () => toggleCart()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
