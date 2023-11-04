import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/userProfile.scss'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/dataSliece';

export const UserProfile = () => {
    const userData = useSelector(state => state.users.user)
    const status = useSelector(state => state.users.status)
    const dispatch = useDispatch()
    console.log(status)
    const SingOutBtnHandler = () =>{
        localStorage.clear()
        dispatch(signOut())
    }
    
    const [state, setState] = useState(0)

    const switcherBtnHandler = (e, data) =>{
        let le = userData.card
        if(state < le.length - 1 && data === 'next'){
            setState(state+1)
            e.nextElementSibling.className = 'btn'
            if(state === le.length - 2){e.className = 'never'}
        }
        if(state > 0 && data === 'previous'){
            setState(state-1)
            e.previousElementSibling.className = 'btn'
            if(state === 1){e.className = 'never'}
        }
        if(state >= le.length - 1 && data === 'next'){
            e.className = 'never'
        }
        if(state <= 0 && data === 'previous'){
            e.className = 'never'
        }
    }


    return userData !== null && status === 'resolved'? (
        <div className='userProfile'>
            <div className="user">
                <h2>{userData.name}</h2>
                <p>Телефон: {userData.phone.number}</p>
            </div>
            
            <div className="cards">
                <div className="card" key={crypto.randomUUID()}>
                    <div>
                        <p>{userData.card[state].name}</p>
                        <p>Картка для виплат</p>
                        <p>{userData.card[state].code}</p>
                        <p>{userData.card[state].date}</p>  
                    </div>
                    <div>
                        <p>{userData.card[state].balance} UAH</p>
                        <p className='logo'><img src="data:image/jpeg;base64,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" alt="" /></p>
                    </div>
                </div>
                
            </div>
            <div className="buttons">
                <div className={ userData.card.length === 1 ? 'never' : 'btn'} onClick={(e) => {switcherBtnHandler(e.target,'next')}}></div> 
                <div className={state === 0 ? 'never' : 'btn'} onClick={(e) => switcherBtnHandler(e.target,'previous')}></div>
           </div>

            <div className="leave">
                <NavLink to='/' style={{textDecoration:"none", color:'inherit'}}><span onClick={() => SingOutBtnHandler()}>Вихід</span></NavLink>
            </div>
        </div> 
        
    ) : (<div>load</div>)
};