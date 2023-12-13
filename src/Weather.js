// import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import FormattedDate from "./FormatedDate";
export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const apiKey = "dfe55254099b96bf9592c69aca42d6f5";
  //   const apiKey = "60f4af7ac1e6d52f88631747c379fecc";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  function handleResponse(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      localTime: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    console.log(response);
  }

  if (weather.loaded) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.localTime} />
          </li>

          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weather.iconUrl}
              alt="Weather icon"
              className="weather-icon"
            />
            <span className="temperature">{weather.temperature}</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse, console.log("Request"));
    return "Loading...";
  }
}
