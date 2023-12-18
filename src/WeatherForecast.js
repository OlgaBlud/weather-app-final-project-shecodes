import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  //   const apiKey = "dfe55254099b96bf9592c69aca42d6f5";
  const apiKey = "1a87a8te48d8o34feb04cce044538ce4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  //   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  console.log(apiUrl);
  function handleResponse(response) {
    console.log(response.data);
    // console.log(props);
  }
  axios.get(apiUrl).then(handleResponse);
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
