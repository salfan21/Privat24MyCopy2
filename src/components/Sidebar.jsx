import React from 'react';
import '../styles/sidebar.scss'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink style={{textDecoration:"none", color:'inherit'}} to='transferToCard'><p><img src="https://st3.depositphotos.com/4177785/15345/v/600/depositphotos_153456250-stock-illustration-money-exchange-flat-icon.jpg" alt="" /> <span>Переказ на картку</span></p></NavLink>
            <NavLink style={{textDecoration:"none", color:'inherit'}} to='TransferToPhone'><p><img src="https://st3.depositphotos.com/4177785/15345/v/600/depositphotos_153456250-stock-illustration-money-exchange-flat-icon.jpg" alt="" /> <span>Поповнення мобільного</span></p></NavLink>
            <NavLink style={{textDecoration:"none", color:'inherit'}} to='transferToIBAN'><p><img src="https://st3.depositphotos.com/4177785/15345/v/600/depositphotos_153456250-stock-illustration-money-exchange-flat-icon.jpg" alt="" /> <span>Платіж</span></p></NavLink>
            <NavLink style={{textDecoration:"none", color:'inherit'}} to='addCard'><p><img src="https://st3.depositphotos.com/4177785/15345/v/600/depositphotos_153456250-stock-illustration-money-exchange-flat-icon.jpg" alt="" /> Додати картку</p></NavLink>
        </div>
    );
};

export default Sidebar;