import React, {useState} from 'react';
import classes from './Main.module.css';
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";

import photo from './photo.svg';
import notif  from './notif.svg';
import exit from './exit.svg';

import first_ic from './first_card_ic.svg';
import sec_ic from './sec_card_ic.svg';
import third_ic from './third_card_ic.svg';

import ChooseCard from "../../components/ChooseCard/ChooseCard";
import Calendar from "../../components/Calendar/Calendar";
import TableItem from "../../components/TableItem/TableItem";
import {Link, useNavigate} from "react-router-dom";

const Main = () => {

    const [cards, setCards] = useState([
        {title: "Создать заявку", subtitle: "Создать заявку по категории необходимого транспорта", image: first_ic},
        {title: "Открыть архив заявок", subtitle: "Просмотр архивных запросов на транспорт", image: sec_ic},
        {title: "Связаться с диспетчером", subtitle: "При возникшем вопросе связаться с диспетчером", image: third_ic},
    ])

    const [claims, setClaims] = useState([
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды"},
        {number: 4213, address: "ул. Агломератная, карьер №132", type: "Работа крана"},
        {number: 4324, address: "ул. Агломератная, карьер №132", type: "Погрузка руды"},
        {number: 4213, address: "ул. Агломератная, карьер №132", type: "Работа крана"},
    ])

    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <SideNavMenu choosen="main"/>
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
                    <div className={classes.choose__info}>
                        <p className={classes.info__title}>
                            Добро пожаловать, Иван !
                        </p>
                        <p className={classes.info__sub}>
                            Сегодня 15 октября, восскресение
                        </p>
                    </div>
                    <div className={classes.choose__list}>
                        {
                            cards.map(item => (
                                <Link to="/createOrder"><ChooseCard title={item.title} subtitle={item.subtitle} image={item.image}/></Link>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.calendar__part}>
                    <p className={classes.calendar__title}>
                        Календарь заявок
                    </p>
                    <div style={{display: "flex"}}>
                        <Calendar/>
                        <div className={classes.claims__part}>
                            <p className={classes.claim__title}>
                                9 Октября - <span className={classes.title__span}>4 заявки</span>
                            </p>
                            <div className={classes.table}>
                                <ul className={classes.table__list}>
                                    <li className={classes.table__title__item}>Номер заявки</li>
                                    <li className={classes.table__title__item}>Адрес</li>
                                    <li className={classes.table__title__item}>Тип работы</li>
                                </ul>
                                <div className={classes.table__items}>
                                    {
                                        claims.map(item => (
                                            <TableItem onClick={() => navigate("/checkOrder")} number={item.number} address={item.address} type={item.type}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;