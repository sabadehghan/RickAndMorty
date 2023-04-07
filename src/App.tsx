import * as React from "react";
import MainRouter from "./router/MainRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./assets/css/Font.css";
import { GraphQLProvider } from "./graphql/apolloClient";
import i18n from "i18next";
import * as I18next from "react-i18next";
import Messages_En from "./constants/Messages_En";
// Configure i18n //
const i18nLanguageResources = {
  en: {
    translation: Messages_En,
  },
};

i18n.use(I18next.initReactI18next).init({
  resources: i18nLanguageResources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
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
      <GraphQLProvider>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </GraphQLProvider>
    </>
  );
}

export default App;
