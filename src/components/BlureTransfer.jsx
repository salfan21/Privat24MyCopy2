import React from 'react';
import '../styles/blureTransinion.scss'
import { NavLink } from 'react-router-dom';
const BlureTransfer = () => {
    return (
        <div className='blure2'>
            <div className="modal">
                <h2>Транзакцію проведено успішно</h2>
                <div className="btnBlock">
                    <NavLink to='/archive' style={{textDecoration:'none', color:'inherit'}}><span>{window.innerWidth > 500? 'Перейти до архіву' : 'Архів'}</span></NavLink>
                    <NavLink to='/' style={{textDecoration:'none', color:'inherit'}}><span>{window.innerWidth > 500? 'Повернутися на головну' : 'Головна'}</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default BlureTransfer;