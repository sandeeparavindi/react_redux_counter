import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./Reducers/CountSlice.ts";

export const store = configureStore(
    {
        reducer: {
            counter: countReducer,
        },
    }
)