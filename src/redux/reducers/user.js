import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    me: {}
};

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        auth: (state, action) => {
            state.isAuth = !state.isAuth;
            state.me = action.payload;
        }
    }
});

export const { setUserState, auth } = user.actions;

export default user.reducer;