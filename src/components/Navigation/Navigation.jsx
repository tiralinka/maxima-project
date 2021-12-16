import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import './Navigation.css'

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header className="header">
            <nav className="header_navigation">
                <img className="header_logo" src='https://www.tozlumikrofon.com/wp-content/uploads/2017/07/kalp-yemek.png'/>
                <h1 className="header_name">Food delivery service</h1>
                {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
                <Link className="header__link" to="/">Main</Link>
                <Link className="header__link" to="/Menu">Menu</Link>
                <Link className="header__link" to="/private">Private</Link>
            </nav>
        </header>
    );
};

export default Navigation;
