import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;
		console.log(temps);
		return (
			<tr key={cityData.city.name}>
			<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="blue" units="K" /></td>	
				<td><Chart data={pressures} color="purple" units="hPa"/></td>
				<td><Chart data={humidities} color="orange" units="%"/></td>
			</tr>
		);
	}

	render(){
		return(
		<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature (K)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
			</thead>
			<tbody>
				{ this.props.weather.map(this.renderWeather) }
			</tbody>
		</table>
		);
	}
}

function mapStateToProps({ weather }) {

	return { weather }; //{ weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
