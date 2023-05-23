import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-6 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Moustly cloudy"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>{" "}
        </div>
      </div>
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}km/h</li>
      </ul>
    </div>
  );
}
