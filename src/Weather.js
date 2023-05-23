import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <p>Tuesday, 09:32</p>
      <form className="mb-3">
        <input type="search" placeholder="Enter city..." autoFocus="on" />

        <input type="submit" value="Search" className="btn btn-light" />
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Novi sad</h1>
          <p className="description">Moustly cloudy</p>
        </div>
        <div className="col-6 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Moustly cloudy"
          />
          <span className="temperature">22</span>
          <span className="unit">°C</span>{" "}
        </div>
      </div>
      <ul>
        <li>Humidity: 20%</li>
        <li>Wind: 6km/h</li>
      </ul>
    </div>
  );
}
