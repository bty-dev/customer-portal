import React from 'react';

import classes from './ModalOrderAccept.module.css';
import icon from './ic.svg';
import YellowButton from "../../YellowButton/YellowButton";
import {Link} from "react-router-dom";
const ModalOrderAccept = ({visible, setVisible}) => {

    const rootClasses = [classes.modal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <img src={icon} alt="icon"/>
                <p className={classes.content__info}>
                    Заявка успешно отправлена
                    После выполнения задачи сообщите водителю код : <span style={{fontWeight: "bold", fontSize: "36px"}}>HR8543BP</span>
                </p>
                <p className={classes.info__subtitle}>
                    Ожидайте спецтехнику <span style={{fontWeight: "bold"}}>16 октября с 16:30</span>
                </p>
                <Link to="/orders">
                    <YellowButton>
                        Далее
                    </YellowButton>
                </Link>

            </div>
        </div>
    );
};

export default ModalOrderAccept;