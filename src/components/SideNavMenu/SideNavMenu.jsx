import React from 'react';
import classes from './SideNavMenu.module.css';

import logo from './logo.svg';
import {Link} from "react-router-dom";

const SideNavMenu = ({choosen}) => {
    return (
        <div className={classes.main}>
            <img className={classes.logo} src={logo} alt="logo"/>
            <ul className={classes.list}>
                <Link style={{textDecoration: "none", color: "#373A36"}} to="/main"><li className={ choosen === "main" ? classes.list__item : classes.list__item1}>Главная</li></Link>
                <Link style={{textDecoration: "none", color: "#373A36"}}  to="/createOrder"><li className={choosen === "create" ? classes.list__item : classes.list__item2}>Создать заявку</li></Link>
                <Link style={{textDecoration: "none", color: "#373A36"}}  to="/ordersArchive"><li className={choosen === "ordersArchive" ? classes.list__item : classes.list__item3}>Архив заявок</li></Link>
                <Link style={{textDecoration: "none", color: "#373A36"}}  to="/main"><li className={classes.list__item4}>Настройки</li></Link>
                <Link style={{textDecoration: "none", color: "#373A36"}}  to="/callDispatcher"><li className={choosen === "callDispatcher" ? classes.list__item : classes.list__item5}>Диспетчер</li></Link>
            </ul>
        </div>
    );
};

export default SideNavMenu;