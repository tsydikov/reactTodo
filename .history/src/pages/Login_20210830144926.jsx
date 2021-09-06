import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Login = () => {
    let userName =''
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        console.log(userName)
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин" value={userName} />
                <MyInput type="password" placeholder="Введите пароли" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;