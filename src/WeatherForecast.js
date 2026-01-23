import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let forecast_api_key = "aa9117065970b0ef2fo4f00f437cba3t";
  let forecast_city = props.cityResult;
  let forecast_api_url = `https://api.shecodes.io/weather/v1/forecast?query=${forecast_city}&key=${forecast_api_key}&units=metric`;
  axios.get(forecast_api_url).then(handleResponse);
  console.log(forecast_api_url);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="snow-night" alt="" />
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperature-max">28°</span>
            <span className="weatherForecast-temperature-min">22°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
