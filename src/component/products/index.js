import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import Product from "./porduct";
import { setCategories, setProdusts, setFilterId } from "./../../reducers";

class Products extends React.Component {
  state = {
    ProductData: []
  };
  componentDidMount() {
    this.props.getProducts();
    if (this.props.cardData.length === 0) {
      this.props.getCategories();
    }
  }
  render() {
    const { setfilter, filter } = this.props;
    return (
      <section className="productPageWraper">
        <nav className="leftNav">
          {this.props.cardData
            .filter(data => data.enabled)
            .map((data, i) => (
              <a
                className={classnames({
                  link: 1,
                  selected: filter.filterID === data.id
                })}
                key={i}
                href={"#" + data.key}
                onClick={() => setfilter(data.id)}
              >
                {data.name}
              </a>
            ))}
        </nav>
        <select
          className="productDrop"
          onChange={e => {
            setfilter(e.target.value);
          }}
          value={filter.filterID}
        >
          <option value="">Please select</option>
          {this.props.cardData
            .filter(data => data.enabled)
            .map(data => (
              <option value={data.id} key={data.id}>
                {data.name}
              </option>
            ))}
        </select>
        <div className="produtsBody">
          {this.props.ProductData.filter(
            product =>
              product.category === filter.filterID || filter.filterID === ""
          ).map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.api.categories,
    ProductData: state.api.products,
    filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories()),
    getProducts: () => dispatch(setProdusts()),
    setfilter: id => dispatch(setFilterId(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
