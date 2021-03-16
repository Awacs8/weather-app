import React from "react";

const CurrentWeather = ({ info }) => {
  return (
    <>
      {typeof info === "undefined" ? (
        <div></div>
      ) : (
        <div>
          <h3>City name: {info.location.name}</h3>
          <p>{info.current.temp_c}</p>
          <img src={info.current.condition.icon} alt={"weather-icon"} />
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
