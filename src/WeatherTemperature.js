import React from "react";

export default function WeatherTempearture(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{props.celsius}</span>
      °C{" "}
    </div>
  );
}
