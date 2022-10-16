import React from 'react';

import classes from './TableLineOrders.module.css';

const TableLineOrders = ({number, address, type, special, status, ...props}) => {
    return (
        <div className={classes.main} {...props}>
            <div className={classes.number}>№<span className={classes.span}>{number}</span></div>
            <div className={classes.text}>{address}</div>
            <div className={classes.text}>{type}</div>
            <div className={classes.text}>{special}</div>
            <div className={classes.text}>{status}</div>
        </div>
    );
};

export default TableLineOrders;