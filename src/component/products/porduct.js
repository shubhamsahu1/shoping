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
       <div className="heading">{name}</div>
       <img className="productImg" src={imageURL} alt="Smiley face"></img>
       <div className="productInfo">{description}</div>
       <div>
           <div className="productMrp">
                MRP {price}
           </div>
           <div className="buyNow">
           buyNow
           </div>
       </div>
      </div>
    );
  }
}

export default Product;
