import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/index";
import { connect } from "react-redux";
import Products from "./products";
import Header from "./header";
import Footer from "./footer";
import Cart from "./../component/cart";
import Login from "./login";
import Register from "./register";
import "./App.scss";
const App = props => (
  <div className="appWraper">
    <Header />

    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Products} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {props.cartShow ? <Cart /> : null}
    </main>
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  cartShow: state.cart.cartShow
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
