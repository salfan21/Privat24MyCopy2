import React, { useState } from 'react';
import TransferPage from '../components/TransferPage';
import { useSelector, useDispatch } from 'react-redux';
import { updatePhoneData, updateOtherUser, updateUserData, updateUserTransition } from '../store/dataSliece';
import BlureTransfer from '../components/BlureTransfer';
import BlureTransferError from '../components/BlureTransferError';

export const TransferToPhone = () => {

    const userData = useSelector(state => state.users.user)
    const usersData = useSelector(state => state.users.users)
    // const otherUsersData = useSelector(state => state.users.otherUser)
    const [switcher, setSwitcher] = useState(null)

    const dispatch = useDispatch()
    
    const handler = (state1,state2,state3) =>{
        if(userData !== null && usersData !== null){
            const userCard = userData.card.find(card => card.code === Number(state1))
            const userHistory = userData.history;
            const otherUser = usersData.find(user => user.phone.number === state2)
            const otherUserPhone = otherUser !== undefined ? otherUser.phone : null
            const otherUserHistory = otherUser !== undefined ? otherUser.history : null
            if(userCard !== undefined && userHistory !== undefined && otherUser !== undefined && otherUserPhone !== null && otherUserHistory !== null && userCard.balance >= Number(state3)){

                const otherUserPhoneArr= {"number": otherUser.phone.number, "balance": otherUser.phone.balance + Number(state3)}
                    
                const userCards = [];
                const userHistory = [];
                userData.card.forEach((card, id) => {
                    if(card.code === Number(state1)){
                        card = {"name": card.name,"date": card.date,"cv": card.cv,"code": card.code,"iban": card.iban,"balance": card.balance - Number(state3)} 
                    }
                    userCards.push(card)
                })
                userData.history.forEach(el => userHistory.push(el))
                userHistory.push({"id": crypto.randomUUID(),date: new Date().toLocaleDateString(),"sand": Number(state1),"have": otherUser.phone.number,"sum": Number(state3),"status": "Відправлено"})

                // console.log({id: otherUser.id , phone: otherUserPhoneArr})
                dispatch(updateUserTransition({id: userData.id, card: userCards, history: userHistory}))
                dispatch(updateUserData({id: userData.id, card: userCards, history: userHistory}))
                dispatch(updatePhoneData({id: otherUser.id , phone: otherUserPhoneArr}))
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
        titleH2='Поповнення мобільного' 
        titleP='Поповнити мобільний онлайн'
        titleH5='Телефон'
        titleH6='Номер телефону'
        placeholder='+380XXXXXXXXX'
        length='13'
        handler={handler}
        />
        { switcher ? <BlureTransfer/> : null}
        { switcher === false? <BlureTransferError switchFunc={switchFunc}/> : null}
        </>
    );
};