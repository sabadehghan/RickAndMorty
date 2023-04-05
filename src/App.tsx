import * as React from "react";
import MainRouter from "./router/MainRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./assets/css/Font.css";

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#A5D2E9",
          },
          secondary: {
            main: "#B7B936",
          },
        },
        typography: {
          fontFamily: "IrishGrover",
          allVariants: {
            fontWeight: 500,
          },
        },
      }),
    []
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
