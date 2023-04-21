import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import  BackDrop  from "../BackDrop/BackDrop";
export const modal = (props) => {
  return (
    <Fragment>
      <BackDrop clicked={props.close}/>
      <div className={classes.Modal}>{props.children}</div>
    </Fragment>
  );
};
export default modal;
