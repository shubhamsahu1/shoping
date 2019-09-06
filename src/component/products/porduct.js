import React from "react";


class Product extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    const { name, imageURL, description, price } = this.props;
    return (
      <div className="productWraper">
        <div className="heading">
          <strong>{name}</strong>
        </div>

        <div className="productImgInfo destopTab">
          <img className="productImg" src={imageURL} alt="Smiley face"></img>
          <div className="productInfo">{description}</div>
        </div>
        <div className="productImgInfo mobile">
          <img className="productImg" src={imageURL} alt="Smiley face"></img>
          <div className="productInfoPrice">
            <div className="productInfo">{description}</div>
            <div className="priceWrap">
              <div className="buyNow">BuyNow @ Rs.{price}</div>
            </div>
          </div>
        </div>
        <div className="priceWrap destop">
          <div className="productMrp">MRP Rs.{price}</div>
          <div className="buyNow">BuyNow</div>
        </div>
        <div className="priceWrap tab">
          <div className="buyNow">BuyNow @ Rs.{price}</div>
        </div>
      </div>
    );
  }
}

export default Product;
