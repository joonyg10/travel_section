import { ThemeProvider } from "styled-components";

import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Promotion } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Promotion />
      </ThemeProvider>
    </>
  );
}

export default App;
