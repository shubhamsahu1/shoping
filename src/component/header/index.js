import React from "react";
import { connect } from "react-redux";
import i18next from "i18next";
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
      <Link to="/">{i18next.t("Home")}</Link>
      <Link to="/product">{i18next.t("Product")}</Link>
    </div>
    <div className="right">
      <div className="loginSection">
        <Link to="/login">{i18next.t("SignIn")}</Link>
        <Link to="/register">{i18next.t("Register")}</Link>
      </div>
      <button className="cart-wraper" onClick={() => props.toggleCart()}>
        <img src={"/static/images/cart.svg"} alt="cart"></img>
        <span>
          {props.totalItem} {i18next.t("items")}
        </span>
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
