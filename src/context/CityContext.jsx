import { createContext, useState, useEffect, useContext } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Istanbul");

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  const values = {
    city,
    setCity,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
