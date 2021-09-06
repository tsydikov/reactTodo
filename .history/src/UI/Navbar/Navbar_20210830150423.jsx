import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login= localStorage.getItem('login');
    const logout = () =>{
        setIsAuth(false);
        localStorage.removeItem('auth')
        localStorage.removeItem('login')
    }
    
    if (login) console.log(login)

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <di style={{paddingLeft:15}}>Пользователь</di>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;