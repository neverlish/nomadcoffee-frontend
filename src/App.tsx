import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar } from "./apollo";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Home from "./screens/Home";

function App() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
