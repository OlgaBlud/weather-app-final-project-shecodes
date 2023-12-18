import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tue</div>
          <WeatherIcon iconCode="01d" width="30%" />
          <div className="forecast-min-max-temperatures">
            <span className="forecast-max-temp">15</span>
            <span className="forecast-min-temp">-5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
