import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasableState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal purchaseCancelHandler={this.purchaseCancelHandler} purchasing={this.state.purchasing}>
                    <OrderSummary
                        totalPrice={this.state.totalPrice}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disabledInfo={disabledInfo}
                    removeIngredientHandler={this.removeIngredientHandler}
                    addIngredientHandler={this.addIngredientHandler}
                    purchaseHandler={this.purchaseHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;