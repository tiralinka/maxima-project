import React, {useContext} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth, menulist} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login />
        )
    }

    const menuId = localStorage.getItem('menuId')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')

    if (menuId && name && phone) {
        const menu = menulist.find(menu => menu.id == menuId)
        return (
            <div>
                <h2>Administrator</h2>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <span>{menu.title}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Administrator</h2>
            <div>
                No orders
            </div>
        </div>
    )


};

export default Private;
