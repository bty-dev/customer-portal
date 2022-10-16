import React from 'react';

import classses from './CheckOrderInfo.module.css';
import classes from "../CreateOrder/CreateOrder.module.css";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import photo from "../Main/photo.svg";
import notif from "../Main/notif.svg";
import {Link, useNavigate} from "react-router-dom";
import exit from "../Main/exit.svg";
import BlackButton from "../../UI/BlackButton/BlackButton";
import YellowButton from "../../UI/YellowButton/YellowButton";
import ModalOrderAccept from "../../UI/Modals/ModalOrderAccept/ModalOrderAccept";

const CheckOrderInfo = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <SideNavMenu choosen="create"/>
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
                        Заявка № <span style={{fontSize: 36}} className={classes.title__span}>4324</span>
                    </p>
                    <p className={classes.info__sub}>
                        Информация по оформленной заявке
                    </p>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Адрес <span className={classes.label__span}>*</span>
                        </p>
                        <input disabled className={classes.input} placeholder="ул. Агломератная, карьер №132" type="text"/>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Тип работы <span className={classes.label__span}>*</span>
                        </p>
                        <select disabled className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">Крановые работы</option>
                            <option value="kran">Крановые работы</option>
                        </select>
                        <p className={classes.rashet}>
                            Расчётное время работы техники ~ <span className={classes.rashet_yel}>3 часа</span>
                        </p>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Время/Дата <span className={classes.label__span}>*</span>
                        </p>
                        <select disabled className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">16 октября с 16:30 по 18:45</option>
                            <option value="kran">16 октября с 16:30 по 18:45</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Выбор парка <span className={classes.label__span}>*</span>
                        </p>
                        <select disabled className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">Погрузочный парк</option>
                            <option value="kran">Погрузочный парк</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Тип транспорта <span className={classes.label__span}>*</span>
                        </p>
                        <select disabled className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">Погрузочный парк</option>
                            <option value="kran">Погрузочный парк</option>
                        </select>
                        <p className={classes.input__label}>
                            Характеристика техники <span className={classes.label__span}>*</span>
                        </p>
                        <select disabled className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">70 т</option>
                            <option value="kran">100 т</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Примечание
                        </p>
                        <textarea disabled className={classes.txtarea} placeholder="Необходим погрузочный кран для выполнения работ погрузки руды." name="textarea" id="txtarea" cols="50" rows="5"></textarea>

                    </div>
                    <div style={{display: "flex", justifySelf: "flex-end"}}>
                        <BlackButton>
                            Распечатать
                        </BlackButton>
                        <YellowButton onClick={() => navigate("/orders")}>
                            Назад
                        </YellowButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOrderInfo;