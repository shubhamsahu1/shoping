import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {toggleCart} from './../../modules'

const Header = (props) => (
  <div className="wraper">
    <div className="logo"  ></div>
    <div className="center">
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
    </div>
    <div className="right">
      <div className="loginSection">
      <Link to="/">SignIn</Link>
      <Link to="/about-us">Register</Link>
      </div>
      <div className="cart-wraper" onClick={()=>props.toggleCart()}>
      <img src={"/static/images/cart.svg"}  alt="Smiley face" ></img>
      <span>{props.totalItem} items</span> 
      
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  totalItem:state.cart.totalItem
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCart: () => toggleCart()
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)