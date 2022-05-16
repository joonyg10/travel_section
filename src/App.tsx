import { ThemeProvider } from "styled-components";

import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">hello world</div>
      </ThemeProvider>
    </>
  );
}

export default App;
