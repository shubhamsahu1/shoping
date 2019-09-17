import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import { setFilterId } from "./../../reducers";
const btnClick = props => {
  props.setfilter(props.cardId);
  props.changePage();
};
const Card = props => (
  <section className={classnames({ Card: 1, "Card--revs": props.rowRev })}>
    <img className="Card--Img" src={props.url} alt="Smiley face"></img>
    <div className="Card-info">
      <span>
        <strong>{props.heading}</strong>
      </span>
      <span className="Card-info--Text">{props.info}</span>
      <button className="Card-info--btn" onClick={() => btnClick(props)}>
        {props.btnLable}
      </button>
    </div>
  </section>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setfilter: id => setFilterId(id),
      changePage: () => push("/product")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
