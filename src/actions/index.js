import axios from 'axios';

const API_KEY="e8f167e3edf558a6ea68764e6864e8a0";
const URL='http://samples.openweathermap.org/data/2.5/forecast?appid='+API_KEY;

export const FETCH_WEATHER='FETCH_WEATHER';

 export function fetchWeather(city) {
     const url=`${URL}&q=${city},us`;
     const request = axios.get(url); //request is promise, asynchronous code
    // console.log('Request: ',request);
     return {
         type:FETCH_WEATHER,
         payload:request
     };
 }