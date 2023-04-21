import React, { Fragment } from "react";
import classes from './OrderSummary.module.css'
const orderSummary = (props) => {
  return (
    <Fragment>
      <h2>Your Order</h2>
      <ul>
        {Object.entries(props.ingredients).map(([type,quantity]) => (
          <li key={type}>
            {type} : {quantity}
          </li>
        ))}
      </ul>
      <button 
      className={[classes.Button,classes.Danger].join(" ")}
      onClick={props.cancel} >Cancel</button>
      <button 
      className={[classes.Button,classes.Success].join(" ")}
      onClick={props.continue}>Continue</button>
      
    </Fragment>
  );
};

export default orderSummary;
