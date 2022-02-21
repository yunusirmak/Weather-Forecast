import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "Istanbul");
  const [coordinates, setCoordinates] = useState({
    lat: "41.0351",
    lon: "28.9833",
  });

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
  }, [city]);

  const values = {
    city,
    setCity,
    coordinates,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
