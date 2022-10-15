import React from 'react';
import classes from './BlackButton.module.css';


const BlackButton = ({children, ...props}) => {
    return (
        <button className={classes.main} {...props}>
            {children}
        </button>
    );
};

export default BlackButton;