import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../App";
import Login from "./Login";
import {createItem, getMenuList} from "../api";
import Card from "../components/Card/Card";

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
            <div>
                <h2>Orders List</h2>
                <div>
                    No orders
                </div>
            </div>
        )

    }

    return (
        <div>
            <h2>Orders List</h2>
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
