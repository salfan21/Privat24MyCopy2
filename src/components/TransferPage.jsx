import React, { useState } from 'react';
import '../styles/transferPage.scss'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import BlureTransfer from './BlureTransfer';

const TransferPage = ({ titleH2, titleP, titleH5, titleH6, placeholder, length, handler }) => {
    const userData = useSelector(state => state.users.user)

    const location = useLocation()

    const [state1, setState1] = useState('')
    const [state2, setState2] = useState(location.state === null ? '' : location.state)
    const [state3, setState3] = useState('')

    return (
        <div className='transferPage'>
            <div className="title">
                <h2>{titleH2}</h2>
                <p>{titleP}</p>
            </div>
            <div className="container">
                <h5>З картки</h5>
                <div className="block">
                    <h6>Номер картки</h6>
                    <select onChange={(e)=>setState1(e.target.value)}>
                        <option value="null">{userData ? 'Оберіть картку' : 'Увійдіть в акаунт'}</option>
                        {userData !== null ? userData.card.map(el => <option key={el.code} value={el.code}>{el.code}</option>) : null}
                    </select>
                </div>
                <h5>{titleH5}</h5>
                <div className="block">
                    <h6>{titleH6}</h6>
                    <input type="text" maxLength={length} placeholder={placeholder} value={state2} onChange={(e) => setState2(e.target.value)}/>
                </div>
                <h5>Сума (UAH)</h5>
                <div className="block">
                    <input type="text" placeholder='00.00' value={state3} onChange={(e) => setState3(e.target.value)}/>
                </div>
            </div>
            <div className="userInfo">
                <p>Натискаючи кнопку "Переказати" Ви приймаєте умови <span style={{color:'rgb(141, 198, 65)'}}>користування сервісом</span></p>
                
            </div>
            <div className='btn'><span onClick={() => {handler(state1,state2,state3); setState2(''); setState3('');} }>Переказати</span></div>
        </div>
        
    );
};

export default TransferPage;