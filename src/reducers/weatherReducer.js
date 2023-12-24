import {putMessage, putWeatherInfo} from "../actions/weatherAction";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
}

export const weatherReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(putWeatherInfo, (state, action) => {
            return {...state, weatherInfo: action.payload, message: null}
        })
        .addCase(putMessage, (state, action) => {
            return {...state, message: action.payload}
        })
})