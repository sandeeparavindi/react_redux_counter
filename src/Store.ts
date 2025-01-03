import {createStore} from "redux";
import {countReducer} from "./CountReducer.ts";

export const store = createStore(countReducer)