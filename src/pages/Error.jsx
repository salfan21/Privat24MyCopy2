import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/errorBlock.scss'
export const Error = () => {
    return (
        <div className='errorBlock'>
            <h2>Помилка 404</h2>
            <NavLink to='/' style={{textDecoration:'none', color:'inherit'}}><span>Повернутися на головну</span></NavLink>
        </div>
    );
};

