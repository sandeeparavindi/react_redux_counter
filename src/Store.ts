import {createStore} from "redux";
import {countReducer} from "./Reducers/CountReducer.ts";

export const store = createStore(countReducer)