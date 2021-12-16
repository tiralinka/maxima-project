import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './Send.css'

const Send = () => {
    const {menuId} = useParams()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('menuId',menuId)
    }

    return (
        <form className="send" onSubmit={sendUserData}>
            <h1 className="send__input-title">Order</h1>
            <input className="send__input" type="text"
                   required
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="phone"/>
            <input className="send__input" type="text"
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="name"/>
            <button className="send__input-button" type="submit">Submit order</button>
        </form>
    );
};

export default Send;
