import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";


export  function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

    <Home/>
    </ThemeProvider>
  )
}

