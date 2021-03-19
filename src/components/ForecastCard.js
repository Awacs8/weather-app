import React from "react";
import { Line } from "react-chartjs-2";
import { Card, Image, CardSection } from "../utils/style";

const ForecastCard = ({ day }) => {
  const chartLabels = [];
  const chartData = [];
  for (const { time, temp_c } of day.hour) {
    chartLabels.push(time.slice(11, 16));
    chartData.push(temp_c);
  }

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,0.4)",
        borderCapStyle: "butt",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,0.4)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <Card>
      <p>{day.date}</p>
      <CardSection>
        <div>
          <Image src={day.day.condition.icon} alt={"forecast-icon"} />
          <p>{day.day.avgtemp_c}&deg;C</p>
          <p>{day.day.condition.text}</p>
        </div>
        <div>
          <p>Min: {day.day.mintemp_c}&deg;C</p>
          <p>Max: {day.day.maxtemp_c}&deg;C</p>
          <p>Humidity: {day.day.avghumidity}%</p>
          <p>Chance of rain: {day.day.daily_chance_of_rain}%</p>
          <p>Max wind: {day.day.maxwind_kph}km/h</p>
        </div>
      </CardSection>
      <Line data={data} options={options} />
    </Card>
  );
};
export default ForecastCard;
