import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = localStorage.getItem('login');
    const logout = () =>{
        setIsAuth(false);
        localStorage.removeItem('auth')
        localStorage.removeItem('login')
    }

    return (
        <div className="navbar">
            {login
            ?<div >
            <MyButton onClick={logout}>Выйти</MyButton>
            <div style={{paddingLeft:15}}>Пользователь {login}</div>
            </div>
            :<div style={{paddingLeft:15}}>Войдите {login}</div>
        }
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;