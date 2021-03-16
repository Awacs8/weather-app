import React, { useState } from "react";
import { getForecastInfo } from "../services/api-service";
import CurrentWeather from "./CurrentWeather";

const Search = () => {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    getForecastInfo(city).then((response) => {
      // console.log(response.data);
      setInfo(response.data);
    });
    setCity("");
  };

  return (
    <>
      <section>
        <label htmlFor="city">Enter the city name:</label>
        <br />
        <input
          placeholder="e.g. Belgrade"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleClick}>find</button>
      </section>
      <CurrentWeather info={info} />
    </>
  );
};

export default Search;
