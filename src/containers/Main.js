import React, { useCallback, useEffect, useState } from "react";
import {
  getForecastInfo,
  getForecastInfoByLocation,
} from "../services/api-service";
import { Container } from "../utils/style";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SearchForm from "../components/SearchForm";

const Main = () => {
  const [info, setInfo] = useState();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const searchByName = (city) => {
    getForecastInfo(city).then((response) => {
      // console.log(response.data);
      setInfo(response.data);
    });
  };

  const setLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    setLocation();
  }, [setLocation]);

  const searchByGeolocation = () => {
    getForecastInfoByLocation(latitude, longitude).then((response) => {
      // console.log(response.data);
      setInfo(response.data);
    });
  };

  return (
    <Container>
      <SearchForm
        searchByName={searchByName}
        searchByGeolocation={searchByGeolocation}
      />
      <CurrentWeather info={info} />
      <Forecast info={info} />
    </Container>
  );
};

export default Main;
