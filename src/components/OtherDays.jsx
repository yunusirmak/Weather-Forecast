import { useCity } from "../context/CityContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

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

export default function OtherDays() {
  const { weeklyForecast } = useCity();

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        className="otherDays"
        sx={{
          maxWidth: "600px",
          margin: "auto",
          border: { xs: "none", md: "1px solid #15bff5" },
          borderRadius: "10px",
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            borderCollapse: "inherit",
            zIndex: "-1",
          }}
        >
          <TableBody>
            {weeklyForecast.slice(1).map((day) => (
              <TableRow key={day.date}>
                <TableCell
                  component="th"
                  scope="row"
                  align="right"
                  sx={{ borderBottom: "none", color: "#687b91" }}
                >
                  {day.date.substring(0, 3)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    height: "35px",
                    borderCollapse: "inherit",
                    borderBottom: "none",
                  }}
                >
                  <img
                    id="sideIcon"
                    style={{
                      height: "40px",
                      paddingLeft: "50px",
                    }}
                    src={require(`../../public/svg/${day.icon}`)}
                    alt={day.description}
                  ></img>
                  <p style={{ marginLeft: "5px", color: "#687b91" }}>
                    {day.weather}
                  </p>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    height: "35px",
                    borderBottom: "none",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography
                    sx={{
                      marginRight: "2px",
                      color: { xs: "white", md: "black" },
                    }}
                  >
                    {Math.floor(day.temp)}°{" "}
                    <Typography
                      variant="p"
                      sx={{ color: "#687b91", ml: "5px", mb: "5px" }}
                    >
                      {Math.floor(day.night)}°
                    </Typography>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
