import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Main = () => {
    const {menulist} = useContext(AppContext)

    if (!menulist.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div className="container">
            <h1 className="container__title">Menu</h1>
            {menulist.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    );
};

export default Main;
