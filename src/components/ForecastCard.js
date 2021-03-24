import React from "react";
import moment from "moment";
import { Card, Image, CardSection, Title } from "../utils/style";
import TemperatureChart from "./TemperatureChart";

const ForecastCard = ({ day }) => {
  return (
    <Card>
      <p>{moment(day.date).format("dddd MMM Do")}</p>
      <CardSection>
        <div>
          <Image src={day.day.condition.icon} alt={"forecast-icon"} />
          <Title>{day.day.avgtemp_c}&deg;C</Title>
          <p>{day.day.condition.text}</p>
        </div>
        <div>
          <p>Min: {day.day.mintemp_c}&deg;C</p>
          <p>Max: {day.day.maxtemp_c}&deg;C</p>
          <p>Humidity: {day.day.avghumidity} %</p>
          <p>Chance of rain: {day.day.daily_chance_of_rain} %</p>
          <p>Max wind: {day.day.maxwind_kph} km/h</p>
        </div>
      </CardSection>
      <TemperatureChart day={day} />
    </Card>
  );
};
export default ForecastCard;
