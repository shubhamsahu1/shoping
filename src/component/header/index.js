import React from 'react'
import { Link } from 'react-router-dom'


export default () => (
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
      <div className="cart-wraper">
      <img src={"/static/images/cart.svg"}  alt="Smiley face" ></img>
      <span>0 items</span> 
      
      </div>
    </div>
  </div>
)