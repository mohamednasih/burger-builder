import React from 'react'
import  BurgerControl  from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css'
const burgerControls = (props) => {
  return (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price}</strong> $</p>
        {props.ingredientsToControl.map(control=> <BurgerControl 
        key={control.type}
        lessClicked={props.removeIngredient}
        addClicked={props.addIngredient}
        type={control.type} removeDisabled={control.removeDisabled} />)}
        <button 
        disabled={!props.purchasable}
        onClick={props.order}
        className={classes.OrderButton}>Order NOW</button>
    </div>
  )
}

export default burgerControls