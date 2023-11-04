import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/users';

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

export const fetchSetUser = createAsyncThunk(
    'users/fetchSetUser',
    async function(userPhone, {rejectWithValue}){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error()
            }
            
            const data = await response.json();
            const rez = data.find(el => el.phone.number === userPhone);
            console.log(rez.id)
            localStorage.setItem('id', rez.id)
            return rez; 
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async function(userId, {rejectWithValue}){
        try{
            const response = await fetch(url + '/' + userId);

            if(!response.ok){
                throw new Error()
            }
            const data = await response.json();
            return data; 
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error()
            }
            const data = await response.json();
            return data; 
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)

export const updateUserData = createAsyncThunk(
    'users/updateCard',
    async function (data, {rejectWithValue, dispatch, getState}) {

        const users = getState().users.users
        
        try {
            const dispData = []
            users.forEach(user => {
                if(user.id === data.id){
                    dispData.push({
                        "phone": user.phone,
                        "id": user.id,
                        "name": user.name,
                        "card": data.card,
                        "history": data.history
                    })
                }else{
                    dispData.push(user)
                }
            });
            dispatch(updateUsers(dispData))
            
            const response = await fetch(`${url}/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    card: data.card,
                    history: data.history,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t add card. Server error.');
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const updatePhoneData = createAsyncThunk(
    'users/updateCard',
    async function (data, {rejectWithValue, dispatch, getState}) {

        const users = getState().users.users
        
        try {
            const dispData = []
            users.forEach(user => {
                if(user.id === data.id){
                    dispData.push({
                        "phone": data.phone,
                        "id": user.id,
                        "name": user.name,
                        "card": user.card,
                        "history": user.history
                    })
                }else{
                    dispData.push(user)
                }
            });
            dispatch(updateUsers(dispData))
            
            const response = await fetch(`${url}/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: data.phone,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t add card. Server error.');
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const userSlice = createSlice({
    name:'users',
    initialState:{
        users:null,
        user:null,
        card:null,
        status:null,
        error:null,
        otherUser:null,
    },
    reducers:{
        signOut(state,action){
            state.user = null
            console.log(state.user)
        },
        updateUser(state,action){
            state.user.card.push(action.payload)
        },
        updateUserTransition(state, action){
            state.user.card = action.payload
        },
        setOtherUser(state, action){
            state.otherUser = action.payload
        },
        updateOtherUser(state, action){
            state.otherUser.card = action.payload.card
            state.otherUser.history = action.payload.history
        },
        updateUserTransition(state,action){
            state.user.card = action.payload.card
            state.user.history = action.payload.history
        },
        updateUsers(state, action){
            state.users = action.payload
        }
    },
    extraReducers:{
        [fetchUser.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUser.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.user = action.payload;
            state.error = null;
        },
        [fetchUser.rejected]:setError,


        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.users = action.payload;
            state.error = null;
        },
        [fetchUsers.rejected]:setError,


        [fetchSetUser.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchSetUser.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.user = action.payload;
            state.card = action.payload.card
            state.error = null;
        },
        [fetchSetUser.rejected]:setError,
    }
})

export const {signOut, signIn, updateUser, setOtherUser, updateOtherUser, updateUserTransition, updateUsers} = userSlice.actions;
export default  userSlice.reducer;