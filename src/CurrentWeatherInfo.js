import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <WeatherIcon code={props.data.icon} />
          <span className="weather-app-temperature-value">
            {Math.round(props.data.temperature)}
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
  );
}
