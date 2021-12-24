import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth} = useContext(AppContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = JSON.parse(localStorage.getItem('orders'))
        setOrders(getOrders)

    }, [])

    if (!isAuth) {
        return (
            <Login/>
        )
    }

    if (!orders.length) {
        return (
            <div style={{padding: 16}}>
                <h2>Administrator</h2>
                <div>
                    No orders
                </div>
            </div>
        )

    }

    return (
        <div>
            <h2>Administrator</h2>
            {orders.map((order) => {
                return (
                    <div style={{padding: 16}}>
                        <h3>{order.name}</h3>
                        <p>{order.phone}</p>
                        <span>{order.menuId}</span>
                    </div>
                )
            })}
        </div>

    );

};

export default Private;
