import React from 'react';
import '../styles/archive.scss'
import { useSelector } from 'react-redux';
import { Error } from './Error';

export const Archive = () => {

    const userData = useSelector(state => state.users.user)
    const func = (el) => {
        const arr = (el) !== 'string' ? (el+'').split('') : el.split('')
        const arr2 = arr.reverse()
        const str = `${arr2[12] === '+'? '+': '*'}**${arr2[3]}${arr2[2]}${arr2[1]}${arr2[0]}`
        return str
    }

    return (
        userData !== null ?   <div className='archive'>
            <h2>Архів</h2>
            <div className="container">
             
               {window.innerWidth > 800? <div className="item">
                    <p>Дата</p>
                    <p>Відправник</p>
                    <p>Одержувач</p>
                    <p>Сумма</p>
                    <p>Статус</p>
                </div> : <div className="item"></div>}

                {
                userData.history.map(el => <div className='item' key={crypto.randomUUID()}>
                    <p>{window.innerWidth < 800? "Дата: ":null}{el.date}</p>
                    <p>{window.innerWidth < 800? "Відпрвник: ":null}{window.innerWidth < 1100? func(el.sand) : el.sand}</p>
                    <p>{window.innerWidth < 800? "Одержувач: ":null}{window.innerWidth < 1100? func(el.have) : el.have}</p>
                    <p>{window.innerWidth < 800? "Сума: ":null}{el.sum} UAH</p>
                    <p>{window.innerWidth < 800? "Статус: ":null}{el.status}</p>
                </div>)
                }
            </div>
        </div> : <div><Error/></div>
    ) 
};

