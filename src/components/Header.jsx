import React, { useContext, useEffect, useState } from 'react';
import '../styles/header.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = ({userData}) => {
    const currencyUSD = useSelector(state => state.currency.currencyUSD)
    return (
        <div className='header'>
            <div className="header_item">
                <NavLink to='/'><div className="header_item_logo"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png" alt="" /></div></NavLink>
                <NavLink to={userData === null ? null : 'archive'}  style={{color:'inherit', textDecoration:'none'}}><p>Архів</p></NavLink>
                <NavLink to='info' style={{color:'inherit', textDecoration:'none'}}><p>Безпека</p></NavLink>
            </div>
            <div className="header_item">
                <p className='header_item_currency'>{ currencyUSD !== null ? currencyUSD.name + " " + currencyUSD.rate : null}</p>
                <NavLink to={userData === null ? 'singin' : 'profile'} style={{color:'inherit', textDecoration:'none'}}>
                    <p className='header_item_user'>{userData === null ? 'Увійти' : 'Профіль'}</p>
                </NavLink>
            </div>
        </div>
    );
};
export default Header;