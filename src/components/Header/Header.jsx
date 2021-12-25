import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import './Header.scss'


const publicLinks = [
    {
        to: "/",
        text: 'Main'
    }, {
        to: "/Menu",
        text: 'Menu'

    }, {
        to: "/Search",
        text: 'Search'

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

const Header = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();

    const links = isAuth ? privateLinks : publicLinks

    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__logoname">
                    <Link to={'/'}>
                        <img className="header__logo"
                             src='https://cdn1.savepice.ru/uploads/2021/12/24/c0a1de8fb44f05d0c6df98094f869696-full.png'
                             alt={'Logo Yummy Express'}/>
                    </Link>
                    <h1 className="header__name">
                        <Link to={'/'}>Yummy Express</Link>
                    </h1>
                </div>
                <ul className="header__links">
                    {links.map(link => {
                        return (
                            <li key={link.to}>
                                <Link className="header__link" to={link.to}>{link.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                    {!isAuth && <button className="header__button" onClick={() => navigate(`/private`)}>Login</button>}
                    {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}

            </nav>
        </header>
    );
};

export default Header;
