import React from 'react';

import classes from './ChooseCard.module.css';

import pic from './pic.svg';

const ChooseCard = ({title, subtitle, image, ...props}) => {
    return (
        <div className={classes.main} {...props}>
            <img className={classes.img} src={image} alt="pic"/>
            <div className={classes.choose__info}>
                <p className={classes.info__title}>
                    {title}
                </p>
                <p className={classes.info__subtitle}>
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default ChooseCard;