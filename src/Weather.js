import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      ready: true,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    const apiUrl = `https://api.openweathermap.org./data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <FormattedDate date={weatherData.date} />
        <form className="mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                autoFocus="on"
                onChange={handleCityChange}
                className="w-100 h-100"
              />
            </div>{" "}
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary"
              />
            </div>{" "}
          </div>{" "}
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
