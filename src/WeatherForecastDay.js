// import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  let maxTemperature = Math.round(props.data.temperature.maximum);
  let minTemperature = Math.round(props.data.temperature.minimum);
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="weather-forecast">
      <div className="forecast-day">{day()}</div>
      <img
        
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      {/* <WeatherIcon iconCode="01d" width="30%" /> */}
      <div className="forecast-min-max-temperatures">
        <span className="forecast-max-temp">{maxTemperature}ºC</span>
        <span className="forecast-min-temp">{minTemperature}ºC</span>
      </div>
    </div>
  );
}
