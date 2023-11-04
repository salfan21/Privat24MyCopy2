import { configureStore } from '@reduxjs/toolkit';
import userReducer from './dataSliece';
import currencyReducer from './currencySliece';
 
export default configureStore({
    reducer: {
        users: userReducer,
        currency: currencyReducer
    }
});