// import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });
  function handleResponse(response) {
    // console.log(response.data);
    setWeather({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      localTime: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      //   iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    // console.log(response);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
    //   search city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "dfe55254099b96bf9592c69aca42d6f5";
    //   const apiKey = "60f4af7ac1e6d52f88631747c379fecc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse, console.log("Request"));
  }

  if (weather.loaded) {
    return (
      <div className="weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherDetails weather={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

// https://www.shecodes.io/demos/react
// https://meteo-shecodes-app.netlify.app/forecast/
// https://github.com/wecodeschool/react-weather-app/tree/master
