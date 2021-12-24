import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import '../PageStyles/Send.scss'

const Send = () => {
    let navigate = useNavigate();
    const {menuId} = useParams()
    const [phone, setPhone] = useState('+7')
    const [name, setName] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        const order = {
            name: name,
            phone: phone,
            menuId: menuId
        }
        const prevOrders = JSON.parse(localStorage.getItem('orders'))
        const newOrders = [...prevOrders, order ]
        localStorage.setItem('orders', JSON.stringify(newOrders))
        alert('Ваша заявка создана! Ожидайте.')
        return navigate('/menu')
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
