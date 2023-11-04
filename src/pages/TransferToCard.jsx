import React, { useEffect, useState } from 'react';
import TransferPage from '../components/TransferPage';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, setOtherUser, updateOtherUser, updateUserData, updateUserTransition } from '../store/dataSliece';
import BlureTransfer from '../components/BlureTransfer';
import BlureTransferError from '../components/BlureTransferError';
const TransferToCard = () => {
    const dispatch = useDispatch()

    const userData = useSelector(state => state.users.user)
    const usersData = useSelector(state => state.users.users)
    // const otherUsersData = useSelector(state => state.users.otherUser)
    const [switcher, setSwitcher] = useState(null)
    console.log(usersData)

    const handler = (state1,state2,state3) =>{
        if(userData !== null && usersData !== null){
            const userCard = userData.card.find(card => card.code === Number(state1))
            const userHistory = userData.history;
            const otherUser = usersData.find(user => user.card.find(card => card.code === Number(state2)))
            const otherUserCards = otherUser !== undefined ? otherUser.card : null
            const otherUserHistory = otherUser !== undefined ? otherUser.history : null
            
            if(userCard !== undefined && userHistory !== undefined && otherUser !== undefined && otherUserCards !== null && otherUserHistory !== null && userCard.balance >= Number(state3)){
                dispatch(setOtherUser(otherUser))
                const dataCards = [];
                const dataHistory = [];
                otherUserCards.forEach((card, id) => {
                    if(card.code === Number(state2)){
                       card = {"name": card.name,"date": card.date,"cv": card.cv,"code": card.code,"iban": card.iban,"balance": card.balance + Number(state3)}
                    }
                    dataCards.push(card)
                });
                
                otherUserHistory.forEach(el => dataHistory.push(el))
                dataHistory.push({"id": crypto.randomUUID(),"date": new Date().toLocaleDateString(),"sand": Number(state1),"have": otherUser.card.find(card => card.code === Number(state2)).code,"sum": Number(state3),"status": "Отримано"})
                // dispatch(updateOtherUser({id: otherUser.id ,card: dataCards, history: dataHistory}))
                

                const userCards = [];
                const userHistory = [];
                userData.card.forEach((card, id) => {
                    if(card.code === Number(state1)){
                        card = {"name": card.name,"date": card.date,"cv": card.cv,"code": card.code,"iban": card.iban,"balance": card.balance - Number(state3)} 
                    }
                    userCards.push(card)
                })
                userData.history.forEach(el => userHistory.push(el))
                userHistory.push({"id": crypto.randomUUID(),date: new Date().toLocaleDateString(),"sand": Number(state1),"have": otherUser.card.find(card => card.code === Number(state2)).code,"sum": Number(state3),"status": "Відправлено"})
                dispatch(updateUserTransition({id: userData.id, card: userCards, history: userHistory}))
                dispatch(updateUserData({id: userData.id, card: userCards, history: userHistory}))
                dispatch(updateUserData({id: otherUser.id ,card: dataCards, history: dataHistory}))
                setSwitcher(true)
            }else{
                setSwitcher(false)
            }
        }
    }

    const switchFunc = () => setSwitcher(null)

    return (
        <>
        <TransferPage 
        titleH2='Переказ' 
        titleP='Переказ між своїми рахунками, з/на картку VISA/MasterCard інших українських та закордонних банків.'
        titleH5='Картка одержувача'
        titleH6='Номер картки'
        placeholder='0000 0000 0000 0000'
        length='16'
        handler={handler}
        />
        { switcher ? <BlureTransfer/> : null}
        { switcher === false? <BlureTransferError switchFunc={switchFunc}/> : null}
        </>
    );
};

export default TransferToCard;