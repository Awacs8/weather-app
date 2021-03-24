import React, { useState } from "react";
import { getForecastInfo } from "../services/api-service";
import { Container } from "../utils/style";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SearchForm from "../components/SearchForm";

const Main = () => {
  const [info, setInfo] = useState();

  const handleClick = (city) => {
    getForecastInfo(city).then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  };

  return (
    <Container>
      <SearchForm handleClick={handleClick} />
      <CurrentWeather info={info} />
      <Forecast info={info} />
    </Container>
  );
};

export default Main;