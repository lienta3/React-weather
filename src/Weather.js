import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    let api_key = "b2a5adcct04b33178913oc335f405433";
    let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}&units=metric`;
    console.log(response.data);
    axios.get(api_url).then(response);
    setWeatherData({
      ready: true,
      cityResult: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let api_key = "b2a5adcct04b33178913oc335f405433";
    let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}&units=metric`;
    axios.get(api_url).then(handleResponse);
  }

  function handleClick(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleClick}>
      <div className="row">
        <div className="col-9 input">
          <input
            type="search"
            placeholder="Enter a city.."
            className="w-100 rounded search-form-input"
            onChange={updateCity}
            autoFocus={true}
          />
        </div>
        <div className="col-3 submit">
          <input
            type="submit"
            value="Search"
            className="w-100 rounded search-form-submit"
          />
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <header>{form}</header>
          <CurrentWeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
