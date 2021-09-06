import React from "react";
import MyInput from "../UI/input/MyInput";

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type="text" placeholder="Введите логин" />
                <MyInput type="password" placeholder="Введите пароли" />
            </form>
        </div>
    )
}

export default Login;