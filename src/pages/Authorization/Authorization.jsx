import React, {useState} from 'react';
import classes from './Authorization.module.css';

import logo from './logo.svg';
import BlackButton from "../../UI/BlackButton/BlackButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const Authorization = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState("");

    const navigate = useNavigate();


    const logIn = () => {
        try{
            axios.post("https://localhost:7173/Auth/login", {
                "email": email,
                "password": password,
            })
                .then(res => {
                    if(res.status === 200) {
                        setToken(res.data)
                        localStorage.setItem("token", res.data);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Вы успешно вошли в аккаунт! :)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                            .then(() => {
                                navigate("/main");
                            })


                    }
                })
        }catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Ой!',
                text: 'Проверьте правильность введенных данных!',
                showConfirmButton: false,
            })
        }

    }

    const getAboutMe = (token) => {
        axios.post("https://localhost:7173/Auth/aboutme", {
            "token": token,
        })
            .then(res => {
                console.log(res.status)
            })
    }

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
                <input onChange={event => setEmail(event.target.value)} className={classes.input} type="text"/>
                <p className={classes.input__suptitle}>
                    Пароль
                </p>
                <input onChange={event => setPassword(event.target.value)} className={classes.input_last} type="text"/>
                <BlackButton onClick={() => logIn()}>Войти</BlackButton>
            </div>
        </div>
    );
};

export default Authorization;