import { useCity } from "../context/CityContext";
import CitySelect from "./CitySelect";
import CurrentDay from "./CurrentDay";
import OtherDays from "./OtherDays";
import Grid from "@mui/material/Grid";

function Main() {
  const { weeklyForecast, city } = useCity();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "90vh" }}
    >
      <Grid item xs={12} sx={{ display: { xs: "none", md: "block" } }}>
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "4em",
            fontWeight: "900",
            position: "relative",
            display: "inline",
            top: "60px",
            left: "240px",
          }}
        >
          {city}
        </p>
      </Grid>
      {weeklyForecast.length > 0 && (
        <Grid
          container
          spacing={0}
          maxWidth={1000}
          justifyContent="center"
          alignItems="center"
          verticalAlign="middle"
        >
          <Grid item xs={12} md={6}>
            <CurrentDay />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              zIndex: "-1",
              position: "relative",
              right: { xs: "0px", md: "20px" },
              top: { xs: "10px", md: "0px" },
            }}
          >
            <OtherDays />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
export default Main;
