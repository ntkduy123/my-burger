import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.purchasing ? <div onClick={props.purchaseCancelHandler} className={classes.Backdrop}></div> : null
);

export default backdrop;