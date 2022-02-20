//Context
import { useCity } from "../context/CityContext";
//Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function CitySelect() {
  const { city, setCity } = useCity();

  const options = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div>
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
    </div>
  );
}
export default CitySelect;
