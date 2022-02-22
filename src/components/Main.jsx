import { useCity } from "../context/CityContext";
import CitySelect from "./CitySelect";
import WeatherCard from "./WeatherCard";
import CurrentDay from "./CurrentDay";

function Main() {
  const { city, coordinates } = useCity();
  return (
    <div style={{ textAlign: "center" }}>
      <CitySelect />
      <h1>{city}</h1>

      <p>Lon: {coordinates.lon}</p>
      <p>Lat: {coordinates.lat}</p>
      <WeatherCard />
      <CurrentDay />
    </div>
  );
}

export default Main;
