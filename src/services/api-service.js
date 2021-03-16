import axios from "axios";
const baseURL = " http://api.weatherapi.com/v1";

export const getForecastInfo = async (city) => {
  return await axios.get(
    `${baseURL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=yes&days=3`
  );
};
