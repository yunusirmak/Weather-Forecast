import { useCity } from "../context/CityContext";
import CitySelect from "./CitySelect";
import CurrentDay from "./CurrentDay";
import OtherDays from "./OtherDays";
import Grid from "@mui/material/Grid";

function Main() {
  const { weeklyForecast } = useCity();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <CitySelect />
      </Grid>
      {weeklyForecast.length > 0 && (
        <Grid
          container
          spacing={0}
          maxWidth={1000}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <CurrentDay />
          </Grid>
          <Grid item xs={12} sm={6}>
            <OtherDays />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
export default Main;
