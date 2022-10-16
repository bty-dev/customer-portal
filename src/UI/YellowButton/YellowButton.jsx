import React from 'react';
import classes from "../YellowButton/YellowButton.module.css";

const YellowButton = ({children, ...props}) => {
    return (
        <button className={classes.main} {...props}>
            {children}
        </button>
    );
};

export default YellowButton;