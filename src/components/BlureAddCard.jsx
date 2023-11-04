import React from 'react';
import '../styles/blureAddCard.scss'
import { NavLink } from 'react-router-dom';

const BlureAddCard = ({data}) => {
    return (
        <div>
            <div className="blure">
                <div className="modal">
                    <h2>Картку успішно додано</h2>
                    <p>Код: {data.code}</p>
                    <p>CVV: {data.cv}</p>
                    <p>IBAN: {data.iban}</p>
                    <p>Дата: {data.date}</p>
                    <NavLink to='/' style={{textDecoration:'none', color:'inherit'}}><span>OK</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default BlureAddCard