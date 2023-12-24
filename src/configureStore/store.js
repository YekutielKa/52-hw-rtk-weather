import {weatherReducer} from "../reducers/weatherReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
})