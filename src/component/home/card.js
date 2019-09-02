import React from 'react'
import classnames from "classnames";
import './card.css';

export default (props) => (
  <div className={classnames({CardWraper:1,revs:props.rowRev})}>
    <img className="CardImg" src={require(`${props.url}`)}  alt="Smiley face" ></img>
    <div className="info">
      <span><strong>{props.heading}</strong></span>
      <span className="infoText">{props.info}</span>
      <button className="btn">{props.btnLable}</button>
    </div>
  </div>
)