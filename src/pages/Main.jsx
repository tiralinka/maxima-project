import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {creatSome, getMenuList} from "../api";
import '../PageStyles/Main.scss'
import {AppContext} from "../App";

const Main = () => {
    const {isAuth} = useContext(AppContext)
    const [menulist, setMenulist] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const link = 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'

    useEffect(() => {
        getMenuList().then((response) => setMenulist(response))
    }, [])


    if (!menulist.length) {
        return (
            <div>...Loading</div>
        )
    }

    function createMenu(e) {
        e.preventDefault()
        const newMenu = {
            id: Number(price),
            title: title,
            description: description,
            price: Number(price),
            image: link
        }
        console.log("newMenu", newMenu)
        creatSome(newMenu).then((res) => setMenulist(res))
        setTitle('')
        setDescription('')
        setPrice(0)
    }

    return (
        <div className="container">

            {isAuth && (
                <form onSubmit={createMenu} style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text"
                           placeholder="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="text" placeholder="description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
                    <input type="number" placeholder="price"
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                    <img src={link} alt=""/>
                    <button type="submit">Create Menu Item</button>

                </form>
            )}
            <h1 className="container__title">Menu</h1>
            <div className={"menus"}>
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
