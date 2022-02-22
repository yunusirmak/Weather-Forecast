import { useCity } from "../context/CityContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
      fontWeight: "600",
    },
  },
  table: {
    backgroundColor: "black",
  },
});

export default function OtherDays() {
  const { weeklyForecast } = useCity();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TableContainer component={Paper}>
          <Table
            aria-label="simple table"
            className="otherDays"
            sx={{
              borderCollapse: "inherit",
            }}
          >
            <TableBody>
              {weeklyForecast.map((day) => (
                <TableRow key={day.date}>
                  <TableCell component="th" scope="row">
                    {day.date.substring(0, 3)}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "35px",
                      borderCollapse: "inherit",
                    }}
                  >
                    <img
                      id="mainIcon"
                      style={{
                        height: "40px",
                      }}
                      src={`/svg/${day.icon}`}
                      alt={day.description}
                    ></img>
                    <p style={{ marginLeft: "5px" }}>{day.weather}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      height: "35px",
                    }}
                  >
                    {Math.floor(day.temp)}° / {Math.floor(day.night)}°
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}
