import { useCity } from "../context/CityContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CitySelect from "./CitySelect";

export default function CurrentDay() {
  const { city, weeklyForecast } = useCity();
  return (
    <div
      className="currentDay"
      sx={{
        maxWidth: 600,
        minHeight: 500,
        borderRadius: 10,
        color: "white",
        textAlign: "center",
      }}
    >
      {/* <h2
        style={{
          display: "block",
          position: "relative",
          top: "50px",
          marginBottom: "50px",
          fontWeight: "300",
        }}
      >
        <LocationOnIcon
          sx={{
            verticalAlign: "middle",
            display: "inline-flex",
            fontSize: "large",
            marginBottom: "2px",
            marginRight: "2px",
          }}
        />
        {city}
      </h2> */}
      <div
        style={{
          display: "block",
          position: "relative",
          top: "25px",
        }}
      >
        <CitySelect />
      </div>

      <img
        id="mainIcon"
        style={{
          height: "300px",
          position: "relative",
          marginBottom: "20px",
        }}
        src={require(`../../public/svg/${weeklyForecast[0].icon}`)}
        alt={weeklyForecast[0].description}
      ></img>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "8em",
          display: "block",
          position: "relative",
          bottom: "150px",
          left: "5px",
        }}
      >
        {Math.floor(weeklyForecast[0].temp)}
        <small
          style={{
            fontWeight: "normal",
            fontSize: "30px",
            position: "relative",
            bottom: "70px",
            color: "#73caf9",
          }}
        >
          °
        </small>
      </h1>
      <h1
        style={{
          fontWeight: "normal",
          fontSize: "1.5em",
          display: "block",
          position: "relative",
          bottom: "250px",
        }}
      >
        {weeklyForecast[0].weather}
      </h1>
      <p
        style={{
          fontWeight: "normal",
          fontSize: "0.8em",
          display: "block",
          position: "relative",
          bottom: "260px",
          color: "#73caf9",
        }}
      >
        {weeklyForecast[0].date}
      </p>
    </div>
  );
}
