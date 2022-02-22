import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "Istanbul");
  const [coordinates, setCoordinates] = useState("");
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  var options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: { q: city, units: "metric", appid: process.env.REACT_APP_API_KEY },
  };

  useEffect(() => {
    localStorage.setItem("city", city);
    axios(options).then((res) => {
      setCoordinates({
        lat: res.data.coord.lat,
        lon: res.data.coord.lon,
      });
    });
    localStorage.setItem("coordinates", JSON.stringify(coordinates));
  }, [city]);

  const dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  var options2 = {
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
    setWeeklyForecast([]);
    axios(options2).then((res) => {
      res.data.daily
        .map((day) => {
          setWeeklyForecast((prev) => [
            ...prev,
            {
              weather: day.weather[0].main,
              date: new Date(day.dt * 1000).toLocaleDateString(
                "en-UK",
                dateOptions
              ),
              temp: day.temp.day,
              icon: `${day.weather[0].icon}.svg`,
              description: day.weather[0].description,
              night: day.temp.night,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [coordinates]);

  useEffect(() => {
    console.log(weeklyForecast);
  }, [weeklyForecast]);

  const values = {
    city,
    setCity,
    coordinates,
    weeklyForecast,
    setWeeklyForecast,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
