import { useFormik } from "formik";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useCity } from "../context/CityContext";

function WeatherCard() {
  const { city, coordinates, setWeeklyForecast } = useCity();
  const [weather, setWeather] = useState([]);
  const dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  var options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/onecall",
    params: {
      lat: coordinates.lat,
      lon: coordinates.lon,
      units: "metric",
      exclude: "minutely,hourly",
      appid: process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    setWeather([]);
    axios(options).then((res) => {
      res.data.daily
        .map((day) => {
          setWeather((prev) => [
            ...prev,
            {
              weather: day.weather[0].main,
              date: new Date(day.dt * 1000).toLocaleDateString(
                "en-US",
                dateOptions
              ),
              temp: day.temp.day,
              icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
              description: day.weather[0].description,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [city]);

  useEffect(() => {
    console.log(weather);
    setWeeklyForecast(weather);
  }, [weather]);

  return (
    <div style={{ display: "flex" }}>
      <br />
      {weather.map((day) => (
        <div key={day.date} style={{ marginLeft: 20 }}>
          <p>{day.date}</p>
          <p>{day.weather}</p>
          <p>{day.temp}</p>
          <img src={day.icon} alt={day.description} />
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
