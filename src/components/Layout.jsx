import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import '../styles/global.scss'

import ThemeContext from '../HOC/Theme';

import { fetchUser, fetchUsers } from '../store/dataSliece';
import { fetchCurrency } from '../store/currencySliece';
 
import Header from './Header';
import Bottom from './Bottom';
import { useDispatch, useSelector } from 'react-redux';

const Layout = () => {

  const [theme, setTheme] = useState('light')
  const toggleTheme = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const dispatch = useDispatch()

    useEffect(() => {
      if(localStorage.length !== 0){
        dispatch(fetchUser(localStorage.getItem('id')))
        dispatch(fetchUsers())
      }
      dispatch(fetchCurrency())
    },[dispatch])
    const userData = useSelector(state => state.users.user)
    const usersData = useSelector(state => state.users.users)
    
  return (

    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
    <div className={"App " + theme}>
      <Header userData={userData}/>
      <div className={"main " + theme} >
        <Outlet/>
      </div>
      <Bottom/>
    </div>
    </ThemeContext.Provider>
    );
};

export default Layout;