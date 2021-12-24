import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import './Navigation.scss'


const publicLinks = [
    {
        to: "/",
        text: 'Main'
    }, {
        to: "/Menu",
        text: 'Menu'
    },
]

const privateLinks = [
    {
        to: "/",
        text: 'Main'
    }, {
        to: "/Menu",
        text: 'Menu'
    },
    {
        to: "/private",
        text: 'Private'
    }
]

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();

    const links = isAuth ? privateLinks : publicLinks

    return (
        <header className="header">
            <nav className="header__navigation">
                <img className="header__logo"
                     src='https://www.tozlumikrofon.com/wp-content/uploads/2017/07/kalp-yemek.png'/>
                <h1 className="header__name">Food delivery service</h1>
                {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
                <ul className="header__links">
                    {links.map(link => {
                        return (
                            <li key={link.to}>
                                <Link className="header__link" to={link.to}>{link.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
