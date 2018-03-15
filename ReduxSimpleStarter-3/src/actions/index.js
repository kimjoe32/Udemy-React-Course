import axios from 'axios';
const API_KEY = '148fa639ab4bda28e3f7b1e2dadd2bb4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

/*
    Make api request to openWeather
    GET request using axios
*/
export function fetchWeather(city) {
    //Always check the US
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url); //GET request
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}