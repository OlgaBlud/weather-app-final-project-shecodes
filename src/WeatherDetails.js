import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
        <div className="col-6">
          <div className="clear-fix">
            <div className="float-left">
              <WeatherIcon
                iconCode={props.weather.icon}
                alt={props.weather.description}
              />
              {/* <img
            src={props.weather.iconUrl}
            alt="{props.weather.description}"
            
          /> */}

              <div className="float-left">
                {" "}
                <span className="temperature">{props.weather.temperature}</span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weather.humidity} %</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
