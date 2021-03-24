import React from "react";
import WeatherCard from "../components/WeatherCard";

const CurrentWeather = ({ info }) => {
  return (
    <>
      {typeof info === "undefined" ? <div></div> : <WeatherCard info={info} />}
    </>
  );
};

export default CurrentWeather;
