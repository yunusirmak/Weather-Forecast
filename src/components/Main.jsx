import { useCity } from "../context/CityContext";
import CitySelect from "./CitySelect";
import WeatherCard from "./WeatherCard";

function Main() {
  const { city, coordinates } = useCity();
  return (
    <div style={{ textAlign: "center" }}>
      <CitySelect />
      <h1>{city}</h1>

      <p>Lon: {coordinates.lon}</p>
      <p>Lat: {coordinates.lat}</p>
      <WeatherCard />
    </div>
  );
}

export default Main;
