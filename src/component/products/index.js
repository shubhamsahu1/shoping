import React from "react";
import { connect } from "react-redux";
import Product from "./porduct";
import {setCategories,setProdusts,setFilterId} from './../../modules'

class Products extends React.Component {
  state = {
    ProductData: []
  };
  componentDidMount() {
    this.props.getProducts()
      if(this.props.cardData.length===0){
        this.props.getCategories()
      }
    
  }
  render() {
    const {setfilter} = this.props;
    return (
      <div className="productPageWraper">
        <div className="leftNav">
          {this.props.cardData.filter((data)=>data.enabled).map((data, i) => (
            <span className="link" key={i} onClick={()=>setfilter(data.id)}>
              {data.name}
            </span>
          ))}
        </div>
        <select className="productDrop">
          {this.props.cardData.filter((data)=>data.enabled).map((data, i) => (
            <option value={data.name} key={i}>
               {data.name}
            </option>
          ))}
        </select>
        <div className="produtsBody">
          {this.props.ProductData.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cardData: state.api.categories,
    ProductData: state.api.products,
    filterId:state.filter.filterId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories()),
    getProducts: () => dispatch(setProdusts()),
    setfilter:()=>dispatch(setFilterId()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)

