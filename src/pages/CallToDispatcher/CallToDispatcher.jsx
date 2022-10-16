import React from 'react';

import classes from './CallToDispatcher.module.css';
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import photo from "../Main/photo.svg";
import notif from "../Main/notif.svg";
import {Link} from "react-router-dom";
import exit from "../Main/exit.svg";
import BlackButton from "../../UI/BlackButton/BlackButton";
import YellowButton from "../../UI/YellowButton/YellowButton";
import ModalOrderAccept from "../../UI/Modals/ModalOrderAccept/ModalOrderAccept";
import ModalOrderDeny from "../../UI/Modals/ModalOrderDeny/ModalOrderDeny";

const CallToDispatcher = () => {
    return (
        <div className={classes.wrapper}>
            <SideNavMenu choosen="callDispatcher"/>
            <div className={classes.main__content}>
                <div className={classes.main__profile}>
                    <img className={classes.photo} src={photo} alt="photo"/>
                    <div className={classes.profile__name}>
                        <p className={classes.name}>Иван Иванов</p>
                        <p className={classes.exp}>Сотрудник</p>
                    </div>
                    <img className={classes.notif} src={notif} alt="notif"/>
                    <Link to="/"><img className={classes.exit} src={exit} alt="exit"/></Link>
                </div>
                <div className={classes.choose__part}>

                    <p className={classes.info__title}>
                        Связь с диспетчером
                    </p>
                    <p className={classes.info__sub}>
                        Запросите звонок диспетчера в случае непредвиденной ситуации
                    </p>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                           Причина вызова <span className={classes.label__span}>*</span>
                        </p>
                        <select className={classes.select} placeholder="ЧС">
                            <option value="kran">ЧС</option>
                            <option value="kran">Непредвиденная ситуация</option>
                        </select>
                        <p className={classes.rashet}>
                            Примерное время ответа ~ <span className={classes.rashet_yel}>2-3 минуты</span>
                        </p>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Сообщение диспетчеру
                        </p>
                        <textarea className={classes.txtarea} placeholder="Водитель застрял." name="textarea" id="txtarea" cols="50" rows="5"></textarea>

                    </div>
                    <div style={{width: "50%"}}>
                        <YellowButton>
                            Отправить
                        </YellowButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToDispatcher;