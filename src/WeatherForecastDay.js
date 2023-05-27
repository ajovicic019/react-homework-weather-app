import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function tempMax() {
    let temp = Math.round(props.data.temp.max);
    return temp;
  }
  function tempMin() {
    let temp = Math.round(props.data.temp.min);
    return temp;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">{tempMax()}° </span>
        <span className="WeatherForecast-temp-min"> {tempMin()}°</span>
      </div>
    </div>
  );
}
