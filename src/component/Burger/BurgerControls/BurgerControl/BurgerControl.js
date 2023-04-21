import React from 'react'
import classes from './BurgerControl.module.css'
const burgerControl = (props) => {
  return (
    <div className={classes.BuildControl}>
        <label  className={classes.Label}>{props.type}</label>
        <button
        onClick={()=>props.lessClicked(props.type)} 
        disabled={props.removeDisabled}
        className={classes.Less}> Less</button>
        <button 
        onClick={()=>props.addClicked(props.type)}
        className={classes.More}> More</button>
    </div>
  )
}
export default burgerControl;