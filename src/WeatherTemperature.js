import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
  if (unit === "celsius") {
    return (
      <div>
        <div className="float-left">
          <span className="temperature">{props.celsius}</span>

          <span className="unit">
            ºC |{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="float-left">
          <span className="temperature">{fahrenheit}</span>
          <span className="unit">
            ºF |{" "}
            <a href="/" onClick={showCelsius}>
              ºC
            </a>
          </span>
        </div>
      </div>
    );
  }
}
