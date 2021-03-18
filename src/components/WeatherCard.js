import React from "react";
import { Card, Image } from "../utils/style";

const WeatherCard = ({ info }) => {
  return (
    <Card>
      <h3>
        {info.location.name}, {info.location.region}, {info.location.country}
      </h3>
      <Image src={info.current.condition.icon} alt={"weather-icon"} />
      <article>
        <p>{info.current.condition.text}</p>
        <p>{info.current.temp_c}&deg;C</p>
        <p>Humidity: {info.current.humidity}%</p>
        <p>Pressure: {info.current.pressure_mb}mb</p>
        <p>
          Wind: {info.current.wind_dir} {info.current.wind_kph}km/h
        </p>
      </article>
    </Card>
  );
};
export default WeatherCard;
