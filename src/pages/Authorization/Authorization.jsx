import React from 'react';
import classes from './Authorization.module.css';

import logo from './logo.svg';
import BlackButton from "../../UI/BlackButton/BlackButton";


const Authorization = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.logo} src={logo} alt="logo"/>
            <div className={classes.back__img}></div>
            <div className={classes.auth_form}>
                <p className={classes.auth__title}>
                    Авторизация
                </p>
                <p className={classes.input__suptitle}>
                    Логин
                </p>
                <input className={classes.input} type="text"/>
                <p className={classes.input__suptitle}>
                    Пароль
                </p>
                <input className={classes.input_last} type="text"/>
                <BlackButton>Войти</BlackButton>
            </div>
        </div>
    );
};

export default Authorization;