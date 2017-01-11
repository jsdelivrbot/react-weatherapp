import axios from 'axios';
const API_KEY = '770aa7b6e360d1dd309e18e1195522d3';
const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid=770aa7b6e360d1dd309e18e1195522d3';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ', request);
	return{
		type: FETCH_WEATHER,
		payload: request
	};
}
