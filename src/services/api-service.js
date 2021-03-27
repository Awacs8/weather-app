import axios from "axios";
const API_URL = "https://api.weatherapi.com/v1";

export const getForecastInfo = async (city) => {
  return await axios.get(
    `${API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city},serbia&aqi=yes&days=3`
  );
};

export const getForecastInfoByLocation = async (latitude, longitude) => {
  return await axios.get(
    `${API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}&aqi=yes&days=3`
  );
};
