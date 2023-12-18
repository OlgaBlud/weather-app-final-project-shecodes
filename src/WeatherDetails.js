import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div>
      <h1>{props.weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weather.localTime} />
        </li>

        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-4 ">
          <div className="float-left">
            <WeatherIcon
              iconCode={props.weather.icon}
              alt={props.weather.description}
            />
            {/* <img
            src={props.weather.iconUrl}
            alt="{props.weather.description}"
            
          /> */}
          </div>
        </div>
        <div className="col-4 p-0">
          <WeatherTemperature celsius={props.weather.temperature} />
        </div>

        <div className="col-4">
          <ul>
            <li>Humidity: {props.weather.humidity} %</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
