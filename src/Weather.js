import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <FormattedDate date={weatherData.date} />
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter city..." autoFocus="on" />
            </div>{" "}
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>{" "}
          </div>{" "}
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <p className="description">{weatherData.description}</p>
          </div>
          <div className="col-6 ">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Moustly cloudy"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>{" "}
          </div>
        </div>
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    const apiUrl = `https://api.openweathermap.org./data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    return "Loading...";
  }
}
