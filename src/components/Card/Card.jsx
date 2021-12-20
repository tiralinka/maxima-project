import React from 'react';
import './Card.scss'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, description, image} = card
    let navigate = useNavigate()
    return (
        <div className="card">
            <img className="card__img" src={image} width={150} alt={'image'}/>
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
            <button onClick={() => navigate(`/menu/${id}`)}>More</button>
        </div>
    )
}

export default Card;
