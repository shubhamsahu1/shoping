import React, { useState } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import i18next from "i18next";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { toggleCart } from "./../../reducers";

const Header = props => {
  const [hambergur, setHambergur] = useState(false);
  return (
    <header className="wraper">
      <img
        src={"/static/images/logo.png"}
        className="logo"
        alt="sabka bajaar"
      ></img>
      <img
        src={"/static/menu.png"}
        className="openMenu"
        alt="Open Menu"
        onClick={() => setHambergur(!hambergur)}
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
        <button
          aria-label={`total items in cart is ${props.totalItem}`}
          className="cart-wraper"
          onClick={() => props.toggleCart()}
        >
          <img src={"/static/images/cart.svg"} alt="cart"></img>
          <p>
            {props.totalItem} {i18next.t("items")}
          </p>
        </button>
      </div>
      <div
        className={classnames({ hamburger: 1, "hamburger--show": hambergur })}
      >
        <div className="hamburger-row1">
          <button
            className="cart-wraper"
            onClick={() => {
              props.toggleCart();
              setHambergur(!hambergur);
            }}
          >
            <img src={"/static/images/cart.svg"} alt="cart"></img>
            <span>
              {props.totalItem} {i18next.t("items")}
            </span>
          </button>
          <div className="hamburger-row1--close">
            <img
              src="/static/baseline_close_black_18dp.png"
              alt="close hamburger"
              onClick={() => setHambergur(!hambergur)}
            ></img>
          </div>
        </div>
        <div
          className="hamburger-row2"
          onClick={() => setHambergur(!hambergur)}
        >
          <Link className="hamburger-row2--link" to="/">
            {i18next.t("Home")}
          </Link>
          <Link className="hamburger-row2--link" to="/product">
            {i18next.t("Product")}
          </Link>
          <Link className="hamburger-row2--link" to="/login">
            {i18next.t("SignIn")}
          </Link>
          <Link className="hamburger-row2--link" to="/register">
            {i18next.t("Register")}
          </Link>
        </div>
      </div>
    </header>
  );
};

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
