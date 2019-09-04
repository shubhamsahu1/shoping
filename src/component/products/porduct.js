import React from "react";
import './product.css';

class Product extends React.Component {
  state = {
  };
  
  componentDidMount() {
    
  }
  render() {
      const {name,imageURL,description,price} = this.props
    return (
      <div className="productWraper">
       <div className="heading"><strong>{name}</strong></div>
       <img className="productImg" src={imageURL} alt="Smiley face"></img>
       <div className="productInfo">{description}</div>
       <div className="priceWrapDestop">
           <div className="productMrp">
                MRP Rs.{price}
           </div>
           <div className="buyNow">
           BuyNow
           </div>
       </div>
       <div className="priceWrapTab">
            <div className="buyNow">
             BuyNow @ Rs.{price}
           </div>
       </div>
      </div>
    );
  }
}

export default Product;
