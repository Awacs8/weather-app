import React, { useState } from "react";
import { getForecastInfo } from "../services/api-service";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";

const Main = () => {
  const [info, setInfo] = useState();

  const handleClick = (city) => {
    getForecastInfo(city).then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  };

  return (
    <>
      <SearchForm handleClick={handleClick} />
      <CurrentWeather info={info} />
      <Forecast info={info} />
    </>
  );
};

export default Main;
