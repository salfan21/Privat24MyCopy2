import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error()
            }
            const data = await response.json();
            const rez = [];
            data.forEach(el => {
                if(el.cc === 'USD' || el.cc === 'PLN' || el.cc === 'GBP' || el.cc === "EUR")
                rez.push({name: el.cc, rate: el.rate})
            });
            console.log(rez)
            return rez
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)


const currencySlice = createSlice({
    name:'currency',
    initialState:{
        currency:null,
        currencyUSD:null,
        userCurrency:null,
    },
    reducers:{
        setUserCurrency(state, action){
            state.userCurrency = JSON.parse(action.payload)
        }
    },
    extraReducers:{
        [fetchCurrency.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCurrency.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.currency = action.payload;
            state.currencyUSD = action.payload.find(el => el.name === 'USD')
            state.userCurrency = action.payload[0]
            state.error = null;
        },
        [fetchCurrency.rejected]:setError,
    }
})

export const {setUserCurrency} = currencySlice.actions;
export default  currencySlice.reducer;