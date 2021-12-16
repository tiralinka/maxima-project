import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";
import Card from "../components/Card/Card"

const Menu = () => {
    const {menulist} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const menu = menulist.find((item) => item.id === Number(id))

    if (!menu) {
        return (
            <div>
                Food is not found!
            </div>
        )
    }

    return (
        <div className="container">
            <h2 className="container__title">Menu</h2>

            <div className="container__card card">
                <h2>{menu.title}</h2>
                <p>{menu.description}</p>
                <span>{menu.price}р</span>

                <button onClick={() => navigate(`/send/${id}`)}>Order</button>
            </div>
        </div>
    );
};

export default Menu;
