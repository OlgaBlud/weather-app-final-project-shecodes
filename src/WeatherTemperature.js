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
        <span className="temperature">{props.celsius}</span>

        <span className="unit">
          ºC |{" "}
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          ºF |{" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            ºC
          </a>
        </span>
      </div>
    );
  }
}
