import React from "react";
import { Card, Image } from "../utils/style";

const ForecastCard = ({ day }) => {
  return (
    <Card>
      <p>{day.date}</p>
      <Image src={day.day.condition.icon} alt={"forecast-icon"} />
      <p>{day.day.condition.text}</p>
      <p>{day.day.avgtemp_c}&deg;C</p>
      <p>Min: {day.day.mintemp_c}&deg;C</p>
      <p>Max: {day.day.maxtemp_c}&deg;C</p>
      <p>Humidity: {day.day.avghumidity}%</p>
      <p>Chance of rain: {day.day.daily_chance_of_rain}%</p>
      <p>Max wind: {day.day.maxwind_kph}km/h</p>
    </Card>
  );
};
export default ForecastCard;
