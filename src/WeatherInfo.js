import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={64} />
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>

      <ul className="mt-3">
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}km/h</li>
      </ul>
    </div>
  );
}
