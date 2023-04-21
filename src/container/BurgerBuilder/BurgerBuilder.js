import React, { Component, Fragment } from "react";
import Burger from "../../component/Burger/Burger";
import BurgerControls from "../../component/Burger/BurgerControls/BurgerControls";
import Modal  from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 3,
  bacon: 3,
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
    price: 2,
    purchasable: false,
    toOrder:false
  };
  order(){
    this.setState({toOrder:true})
  }
  cancelOrder(){
    this.setState({toOrder:false})
  }
  continueOrder(){
    alert('ordered');
    this.setState({toOrder:false})
  }
  render() {
    return (
      <Fragment>
        {
          this.state.toOrder?
          (<Modal close={this.cancelOrder.bind(this)}>
              <OrderSummary 
              cancel={this.cancelOrder.bind(this)}
              continue={this.continueOrder.bind(this)}
              ingredients={this.state.ingredients}/>
          </Modal>):
          null
        }
        
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BurgerControls
            order={this.order.bind(this)}
            purchasable={this.state.purchasable}
            price={this.state.price}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            ingredientsToControl={this.generateIngredientsControls()}
          />
        </div>
      </Fragment>
    );
  }
  generateIngredientsControls() {
    return Object.keys(this.state.ingredients).map((key) => {
      return {
        type: key,
        removeDisabled: this.state.ingredients[key] <= 0,
      };
    });
  }
  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newIngredients[type] + 1;
    const newPrice = this.state.price + INGREDIENTS_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      price: newPrice,
      purchasable:this.updatePurchasable(newIngredients),
    });
  };
  removeIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newIngredients[type] - 1;
    const newPrice = this.state.price - INGREDIENTS_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      price: newPrice,
      purchasable:this.updatePurchasable(newIngredients),
    });
  };
  updatePurchasable(ingredients) {
    const newPurchaseState = Object.keys(ingredients).some(
      (key) => ingredients[key] > 0
    );
    return newPurchaseState;
  }
 
}
