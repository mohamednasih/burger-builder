import React from "react";
import classes from "./BackDrop.module.css";
const backDrop = (props) => {
  return <div onClick={props.clicked} className={classes.Backdrop}></div>;
};
export default backDrop;
