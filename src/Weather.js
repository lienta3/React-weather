import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState();
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleClick(response) {
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
          <main>
            <div className="row">
              <div className="col-sm-6">
                <h1 className="weather-app-city" id="city">
                  {weatherData.cityResult}
                </h1>
                <p className="weather-app-details">
                  <span>
                    <FormattedDate date={weatherData.date} />
                  </span>{" "}
                  <span id="description">{weatherData.condition}</span>
                  <br />
                  Humidity:{" "}
                  <strong id="humidity">{weatherData.humidity} %</strong>, Wind:
                  <strong id="windSpeed"> {weatherData.wind} km/h</strong>
                </p>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <img
                  src={weatherData.icon}
                  alt="weather condition icon"
                  className="current-icon"
                />
                <span className="weather-app-temperature-value">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="weather-app-temperature-unit">°C</span>
              </div>
            </div>
            <div className="weather-forecast" id="forecast">
              <div>
                Tue
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weather condition icon"
                />
                <div className="weather-forecast-temperatures">
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    28°
                  </div>
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    22°
                  </div>
                </div>
              </div>
              <div>
                Tue
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weather condition icon"
                />
                <div className="weather-forecast-temperatures">
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    28°
                  </div>
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    22°
                  </div>
                </div>
              </div>
              <div>
                Tue
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weather condition icon"
                />
                <div className="weather-forecast-temperatures">
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    28°
                  </div>
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    22°
                  </div>
                </div>
              </div>
              <div>
                Tue
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weather condition icon"
                />
                <div className="weather-forecast-temperatures">
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    28°
                  </div>
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    22°
                  </div>
                </div>
              </div>
              <div>
                Tue
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weather condition icon"
                />
                <div className="weather-forecast-temperatures">
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    28°
                  </div>
                  <div
                    className="
                    weather-forecast-temperature"
                  >
                    22°
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    let api_key = "b2a5adcct04b33178913oc335f405433";
    let api_url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${api_key}&units=metric`;
    axios.get(api_url).then(handleClick);

    return "Loading...";
  }
}
