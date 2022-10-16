import React, {useState} from 'react';

import classes from './Orders.module.css';
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import photo from "../Main/photo.svg";
import notif from "../Main/notif.svg";
import {Link, useNavigate} from "react-router-dom";
import exit from "../Main/exit.svg";
import BlackButton from "../../UI/BlackButton/BlackButton";
import YellowButton from "../../UI/YellowButton/YellowButton";
import ModalOrderAccept from "../../UI/Modals/ModalOrderAccept/ModalOrderAccept";
import TableItem from "../../components/TableItem/TableItem";
import TableLineOrders from "../../components/TableLineOrders/TableLineOrders";

const Orders = () => {

    const [claims, setClaims] = useState([
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды", special: "KOMATSU FD50AYT-10", status: "Забронированно"},
    ])

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
                        Заявки
                    </p>
                    <p className={classes.info__sub}>
                        За период 01 Октября - 31 Октября
                    </p>
                    <div className={classes.table}>
                        <ul className={classes.table__list}>
                            <li className={classes.table__title__item}>Номер заявки</li>
                            <li className={classes.table__title__item}>Адрес</li>
                            <li className={classes.table__title__item}>Тип работы</li>
                            <li className={classes.table__title__item}>Спецтехника</li>
                            <li className={classes.table__title__item}>Статус</li>
                        </ul>
                        <div className={classes.table__items}>
                            {
                                claims.map(item => (
                                    <TableLineOrders onClick={() => navigate("/checkOrder")} number={item.number} address={item.address} type={item.type} special={item.special} status={item.status}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;