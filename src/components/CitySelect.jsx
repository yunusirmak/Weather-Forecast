//Context
import { useCity } from "../context/CityContext";
//Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function CitySelect() {
  const { city, setCity } = useCity();

  const options = [
    "Istanbul",
    "Ardahan",
    "Los Angeles",
    "New York",
    "Paris",
    "London",
    "Berlin",
    "Madrid",
    "Rome",
    "Tokyo",
    "Kyiv",
  ];

  function handleChange(e) {
    setCity(e.target.value);
  }
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      allVariants: {
        fontFamily: "Montserrat",
        fontWeight: "600",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TextField
          id="city-select"
          select
          label="City"
          value={city}
          onChange={handleChange}
          helperText="You can select another city"
          margin="normal"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </ThemeProvider>
    </div>
  );
}
export default CitySelect;
