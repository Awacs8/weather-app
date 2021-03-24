import React from "react";
import { CardList } from "../utils/style";
import ForecastCard from "../components/ForecastCard";

const Forecast = ({ info }) => {
  return (
    <>
      <>
        {typeof info === "undefined" ? (
          <div></div>
        ) : (
          <CardList>
            {info.forecast.forecastday.map((day) => (
              <ForecastCard day={day} key={day.date} />
            ))}
          </CardList>
        )}
      </>
    </>
  );
};

export default Forecast;
