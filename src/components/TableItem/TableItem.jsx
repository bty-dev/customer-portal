import React from 'react';

import classes from './TableItem.module.css';

const TableItem = ({number, address, type, ...props}) => {
    return (
        <div className={classes.main} {...props}>
            <div className={classes.number}>№<span className={classes.span}>{number}</span></div>
            <div className={classes.text}>{address}</div>
            <div className={classes.text}>{type}</div>
        </div>
    );
};

export default TableItem;