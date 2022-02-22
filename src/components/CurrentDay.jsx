import { useCity } from "../context/CityContext";

export default function CurrentDay() {
  const { city, coordinates, weeklyForecast } = useCity();
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
      <h1
        style={{
          display: "block",
          position: "relative",
          top: "50px",
          marginBottom: "50px",
        }}
      >
        {city}
      </h1>
      <img
        style={{
          height: "300px",
          position: "relative",
          marginBottom: "20px",
        }}
        src={require("../svg/10d.svg").default}
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
        14
        <small
          style={{
            fontWeight: "normal",
            fontSize: "30px",
            position: "relative",
            bottom: "70px",
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
        Rain
      </h1>
      <p
        style={{
          fontWeight: "normal",
          fontSize: "1em",
          display: "block",
          position: "relative",
          bottom: "250px",
        }}
      >
        Tuesday, 22 Feb
      </p>
    </div>
  );
}
