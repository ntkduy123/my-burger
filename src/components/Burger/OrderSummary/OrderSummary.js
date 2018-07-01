import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKeY => {
        return (
            <li key={igKeY}>
                <span style={{textTransform: 'capitalize'}}>{igKeY}</span>
                : {props.ingredients[igKeY]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;