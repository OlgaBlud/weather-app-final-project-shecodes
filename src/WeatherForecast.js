import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    // console.log(response.data.daily);
    // console.log(props);
  }
  if (loaded) {
    console.log(forecast[0]);
    return <WeatherForecastDay data={forecast[0]} />;
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "1a87a8te48d8o34feb04cce044538ce4";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    //   const apiKey = "dfe55254099b96bf9592c69aca42d6f5";
    //   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    //   console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    // return null;
  }
}
