import React from "react";

import Product from "./porduct";
const leftNav = [
  "Fruits & Vegetables",
  "Bakery Cakes and Dairy",
  "Beverages",
  "Beauty and Hygiene",
  "Baby Care"
];

class Products extends React.Component{
  state = {
    ProductData:[]
  }
  componentDidMount(){
    fetch('http://localhost:5000/products').then((response) => response.json())
        .then(( results ) => this.setState({ ProductData: results })).catch(err => {
          console.log("responce error");
        });;
  }
  render() {
    debugger;
    return(
      <div className="productPageWraper">
        <div className="leftNav">
          {leftNav.map((val, i) => (
            <a className="link" key={i} href="/">
              {val}
            </a>
          ))}
        </div>
        <select className="productDrop">
        {leftNav.map((val, i) => (
             <option value={val} key={i}>{val}</option>
          ))}
         </select>
        <div className="produtsBody">
          { this.state.ProductData.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    )
  }
}
export default Products;
