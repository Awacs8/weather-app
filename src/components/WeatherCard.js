import React from "react";
import { Card, Image, CardSection, Title } from "../utils/style";

const WeatherCard = ({ info }) => {
  return (
    <Card>
      <p>current weather</p>
      <Title>
        {info.location.name}, {info.location.country}
      </Title>
      <CardSection>
        <div>
          <Image src={info.current.condition.icon} alt={"weather-icon"} />
          <p>{info.current.condition.text}</p>
        </div>
        <div>
          <Title size="large">{info.current.temp_c}&deg;C</Title>
          <p>Humidity: {info.current.humidity} %</p>
          <p>Pressure: {info.current.pressure_mb} mbar</p>
          <p>
            Wind: {info.current.wind_dir} {info.current.wind_kph} km/h
          </p>
        </div>
      </CardSection>
    </Card>
  );
};
export default WeatherCard;
