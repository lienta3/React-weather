import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function CurrentWeatherInfo(props) {
  return (
    <main>
      <div className="row">
        <div className="col-sm-6">
          <h1 className="weather-app-city" id="city">
            {props.data.cityResult}
          </h1>
          <p className="weather-app-details">
            <span>
              <FormattedDate date={props.data.date} />
            </span>{" "}
            <span id="description">{props.data.condition}</span>
            <br />
            Humidity: <strong id="humidity">{props.data.humidity}%</strong>,
            Wind:
            <strong id="windSpeed"> {props.data.wind} km/h</strong>
          </p>
        </div>
        <div className="col-sm-6 d-flex justify-content-end">
          <WeatherIcon code={props.data.icon} className="align-self-center" />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <WeatherForecast />
    </main>
  );
}
