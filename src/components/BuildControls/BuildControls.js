import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => {
            return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.addIngredientHandler(ctrl.type)}
                        removed={() => props.removeIngredientHandler(ctrl.type)}
                        disabled={props.disabledInfo[ctrl.type]}
                    />
        })}
        <button
            onClick={props.purchaseHandler}
            className={classes.OrderButton} 
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;