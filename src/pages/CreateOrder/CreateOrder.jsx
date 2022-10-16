import React, {useState} from 'react';

import classes from './CreateOrder.module.css';
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import photo from "../Main/photo.svg";
import notif from "../Main/notif.svg";
import {Link} from "react-router-dom";
import exit from "../Main/exit.svg";
import ChooseCard from "../../components/ChooseCard/ChooseCard";
import Calendar from "../../components/Calendar/Calendar";
import TableItem from "../../components/TableItem/TableItem";
import BlackButton from "../../UI/BlackButton/BlackButton";
import YellowButton from "../../UI/YellowButton/YellowButton";
import ModalOrderAccept from "../../UI/Modals/ModalOrderAccept/ModalOrderAccept";
import ModalOrderDeny from "../../UI/Modals/ModalOrderDeny/ModalOrderDeny";

const CreateOrder = () => {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);


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
                        Создание новой заявки
                    </p>
                    <p className={classes.info__sub}>
                        Заполните форму для запроса необходимой техники
                    </p>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Адрес <span className={classes.label__span}>*</span>
                        </p>
                        <input className={classes.input} placeholder="ул. Агломератная, карьер №132" type="text"/>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Тип работы <span className={classes.label__span}>*</span>
                        </p>
                        <select className={classes.select} placeholder="ул. Агломератная, карьер №132">
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
                        <select className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">16 октября с 16:30 по 18:45</option>
                            <option value="kran">16 октября с 16:30 по 18:45</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Выбор парка <span className={classes.label__span}>*</span>
                        </p>
                        <select className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">Погрузочный парк</option>
                            <option value="kran">Погрузочный парк</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Тип транспорта <span className={classes.label__span}>*</span>
                        </p>
                        <select className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">Погрузочный парк</option>
                            <option value="kran">Погрузочный парк</option>
                        </select>
                        <p className={classes.input__label}>
                            Характеристика техники <span className={classes.label__span}>*</span>
                        </p>
                        <select className={classes.select} placeholder="ул. Агломератная, карьер №132">
                            <option value="kran">70 т</option>
                            <option value="kran">100 т</option>
                        </select>
                    </div>
                    <div className={classes.first__line}>
                        <p className={classes.input__label}>
                            Примечание
                        </p>
                        <textarea className={classes.txtarea} placeholder="Необходим погрузочный кран для выполнения работ погрузки руды." name="textarea" id="txtarea" cols="50" rows="5"></textarea>

                    </div>
                    <div style={{display: "flex", justifySelf: "flex-end"}}>
                        <BlackButton onClick={() => setVisible2(true)}>
                            Отмена
                        </BlackButton>
                        <YellowButton onClick={() => setVisible(true)}>
                            Отправить
                        </YellowButton>
                    </div>

                </div>
            </div>
            <ModalOrderAccept visible={visible} setVisible={setVisible}/>
            <ModalOrderDeny visible={visible2} setVisible={setVisible2}/>
        </div>
    );
};

export default CreateOrder;