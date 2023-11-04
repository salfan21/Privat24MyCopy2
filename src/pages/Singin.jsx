import React, { useContext, useState } from 'react';

// import SingIn from '../HOC/SIngIn';

import '../styles/singin.scss'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSetUser } from '../store/dataSliece';

export const Singin = () => {

    const [phonee, setPhonee] = useState()
    const dispatch = useDispatch()
   
    const userData = useSelector(state => state.users.user)

    if(userData === null){
        return (
         <div className='singin'>
          <h2>Вхід у аккаунт</h2>
            <input maxLength='13' type="text" onChange={(e)=>{e.preventDefault();setPhonee(e.target.value)}} value={phonee}/>
            <p>Продовжуючи, я підтверджую, що згоден, aбо згодна з <span>Умовами та Правилами</span></p>
            <button onClick={(e) => dispatch(fetchSetUser(phonee))}>
                Продовжити
            </button>
        </div> 
    )}else{
        
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <h2>Привіт {
                userData.name
                }</h2>
                <NavLink to='/' style={{textDecoration:"none",color:"inherit"}}><p style={{textAlign:'center', marginTop:'20px'}}><span style={{color: "rgb(141, 198, 65)", textDecoration:"underline"}}>Повернутися на головну</span></p></NavLink>
            </div>
        )
    }
};

 