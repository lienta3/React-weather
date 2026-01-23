import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
