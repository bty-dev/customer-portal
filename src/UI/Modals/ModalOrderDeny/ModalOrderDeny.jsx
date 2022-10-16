import React from 'react';

import classes from './ModalOrderDeny.module.css';
import icon from "../ModalOrderAccept/ic.svg";
import {Link} from "react-router-dom";
import YellowButton from "../../YellowButton/YellowButton";
import BlackButton from "../../BlackButton/BlackButton";


const ModalOrderDeny = ({visible, setVisible}) => {

    const rootClasses = [classes.modal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <p className={classes.content__info}>
                    Вы уверены что хотите выйти из создания заявки ?
                </p>
                <div style={{display: "flex"}}>
                    <YellowButton>
                        Вернуться
                    </YellowButton>
                    <BlackButton>
                        Закрыть
                    </BlackButton>
                </div>



            </div>
        </div>
    );
};

export default ModalOrderDeny;