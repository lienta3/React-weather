import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let forecast_api_key = "aa9117065970b0ef2fo4f00f437cba3t";
    let forecast_city = props.cityResult;
    let forecast_api_url = `https://api.shecodes.io/weather/v1/forecast?query=${forecast_city}&key=${forecast_api_key}&units=metric`;

    axios.get(forecast_api_url).then(handleResponse);
    console.log(forecast_api_url);
    return null;
  }
}
