import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";
const Burger = (props) => {
  function generateComponentsOfBurgerIngredient() {
    return Object.entries(props.ingredients).flatMap(([type, quantity]) => 
      [...Array(quantity)].map((_, index) => (
        <BurgerIngredient key={type + index} type={type} />
      ))
    );
  }
  var foo = generateComponentsOfBurgerIngredient();
  var ingredients = foo.length === 0 ? <p> Please add ingredients </p> : foo;
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
