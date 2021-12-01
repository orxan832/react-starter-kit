import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

export const common = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCommonState: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        }
    }
});

export const { setCommonState } = common.actions;

export default common.reducer;