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
    <header className="header">
      <picture>
        <source media="(min-width: 768px)" srcSet="/static/images/logo2x.png" />
        <source media="(min-width: 465px)" srcSet="/static/images/logo.png" />
        <img
          src={"/static/images/logo.png"}
          className="logo"
          alt="sabka bajaar"
        />
      </picture>

      <img
        src={"/static/menu.png"}
        className="header--openMenu"
        alt="Open Menu"
        onClick={() => setHambergur(!hambergur)}
      ></img>

      <nav className="header-center">
        <Link to="/">{i18next.t("Home")}</Link>
        <Link to="/product">{i18next.t("Product")}</Link>
      </nav>
      <nav className="header-right">
        <div className="header-right-login">
          <Link to="/login">{i18next.t("SignIn")}</Link>
          <Link to="/register">{i18next.t("Register")}</Link>
        </div>
        <button
          aria-label={`total items in cart is ${props.totalItem}`}
          className="header-cart--button"
          onClick={() => props.toggleCart()}
        >
          <img src={"/static/images/cart.svg"} alt="cart"></img>
          <p>
            {props.totalItem} {i18next.t("items")}
          </p>
        </button>
      </nav>
      <div
        className={classnames({
          "header-hamburger": 1,
          "header-hamburger--show": hambergur
        })}
      >
        <div className="header-hamburger-row1">
          <button
            className="header-cart--button"
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
          <div className="header-hamburger-row1--close">
            <img
              src="/static/baseline_close_black_18dp.png"
              alt="close hamburger"
              onClick={() => setHambergur(!hambergur)}
            ></img>
          </div>
        </div>
        <nav
          className="header-hamburger-row2"
          onClick={() => setHambergur(!hambergur)}
        >
          <Link className="header-hamburger-row2--link" to="/">
            {i18next.t("Home")}
          </Link>
          <Link className="header-hamburger-row2--link" to="/product">
            {i18next.t("Product")}
          </Link>
          <Link className="header-hamburger-row2--link" to="/login">
            {i18next.t("SignIn")}
          </Link>
          <Link className="header-hamburger-row2--link" to="/register">
            {i18next.t("Register")}
          </Link>
        </nav>
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
