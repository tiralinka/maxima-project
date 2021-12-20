import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMenu} from "../api";

const Menu = () => {
    // const {menulist} = useContext(AppContext)
    const [menu, setMenu] = useState()
    let navigate = useNavigate();
    let {id} = useParams();

    useEffect(() => {
        getMenu(id).then((res) => setMenu(res))
    }, [])

    if (!menu) {
        return (
            <div>
                Loading...
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
