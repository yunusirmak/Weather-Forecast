import { useCity } from "../context/CityContext";
import CitySelect from "./CitySelect";
import WeatherCard from "./WeatherCard";

function Main() {
  const { city } = useCity();
  return (
    <div>
      <CitySelect />
      <h1>{city}</h1>
      <WeatherCard />
    </div>
  );
}

export default Main;
