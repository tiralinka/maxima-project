import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {createItem, getMenuList} from "../api";
import '../PageStyles/Main.scss'
import {AppContext} from "../App";

const Main = () => {
    const {isAuth} = useContext(AppContext)
    const [menulist, setMenulist] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [link, setLink] = useState('')

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
        createItem(newMenu).then((res) => setMenulist(res))
        setTitle('')
        setDescription('')
        setPrice(0)
        setLink('')
    }

    return (
        <div className="container">

            {isAuth && (
                <form className="create-menu-form" onSubmit={createMenu} style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text"
                           required
                           placeholder="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="text" placeholder="description"
                           required
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
                    <input type="number" placeholder="price"
                           required
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                    <input type="text" placeholder="insert link"
                           required
                           value={link}
                           onChange={(e) => setLink(e.target.value)}
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
