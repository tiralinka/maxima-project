import React, {useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {getMenuList} from "../api";

const Main = () => {
    const [menulist, setMenulist] = useState([])

    useEffect(() => {
        getMenuList().then((response) => setMenulist(response))
        // const response = cards

    }, [])


    if (!menulist.length) {
        return (
            <div>...Loading</div>
        )
    }
    return (
        <div className="container" style={{flexDirection: 'column'}}>
            <h1 className="container__title">Menu</h1>
            <div style={{display: 'flex'}}>
                {menulist.map((card) => {
                    return (
                        <Card key={card.id} card={card}/>
                    )
                })}
            </div>

        </div>
    );
};

export default Main;
