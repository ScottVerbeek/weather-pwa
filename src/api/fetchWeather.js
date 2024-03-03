import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5f6d9da3936369b374d36470d02b2bc1';
const UNITS = 'metric';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: UNITS,
            APPID: API_KEY,
        }
    });

    return data;
}