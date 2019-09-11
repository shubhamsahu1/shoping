import React from "react";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from "classnames";
import {setFilterId } from "./../../modules";
const btnClick = (props)=>{
props.setfilter(props.cardId)
props.changePage()
}
const Card = props => (
    <div className={classnames({ CardWraper: 1, revs: props.rowRev })}>
      <img className="CardImg" src={props.url} alt="Smiley face"></img>
      <div className="info">
        <span>
          <strong>{props.heading}</strong>
        </span>
        <span className="infoText">{props.info}</span>
        <button className="btn" onClick={()=>btnClick(props)}>{props.btnLable}</button>
      </div>
    </div>
  );

  
const mapStateToProps = () => ({
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setfilter: id => setFilterId(id),
  changePage: () => push('/product')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
