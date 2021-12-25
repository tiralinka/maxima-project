import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMenu} from "../api";

const Menu = () => {
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
    const {title, description, price} = menu

    return (
        <div className="container">

            <div className="container__card card">

                <h2>{title}</h2>
                <p>{description}</p>
                <span>{price} рублей</span>

                <button onClick={() => navigate(`/send/${id}`)}>Order</button>
            </div>

        </div>
    );
};

export default Menu;
