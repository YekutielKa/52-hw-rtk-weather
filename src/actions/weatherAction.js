import {api_key, base_url} from "../units/constants";
import {createAction} from "@reduxjs/toolkit";

export const putWeatherInfo = createAction('putWeatherInfo')
export const putMessage = createAction('putMessage')

export const fetchWeather = city => {
    return async dispatch => {
        dispatch(putMessage('Pending...'));
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const weatherInfo = {
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
            dispatch(putWeatherInfo(weatherInfo));
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Enter correct city name'));
        }
    }
}