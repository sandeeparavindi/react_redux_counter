import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    count : 0,
    show : true,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        toggle: (state) => {
            state.show = !state.show;
        },
    }
})

export const { increment, decrement, toggle } = counterSlice.actions;
export default counterSlice.reducer;