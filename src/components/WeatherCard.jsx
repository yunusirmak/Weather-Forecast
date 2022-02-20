import { useFormik } from "formik";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useCity } from "../context/CityContext";

function WeatherCard() {
  const { city } = useCity();
  const [weather, setWeather] = useState({
    weather: "",
    description: "",
    temp: "",
  });

  var options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
    params: { q: city, cnt: "7", units: "metric" },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios(options)
      .then((res) => {
        setWeather({
          weather: res.data.list[0].weather[0].main,
          description: res.data.list[0].weather[0].description,
          temp: res.data.list[0].temp.day,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <div>
      <p>{weather.weather}</p>
      <p>{weather.description}</p>
      <p>{weather.temp}</p>
    </div>
  );
}

export default WeatherCard;
