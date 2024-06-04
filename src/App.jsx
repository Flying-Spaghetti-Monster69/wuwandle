import Body from "./components/Body";
import Navbar from "./components/Navbar";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "yellow",
  cursorType: "pointer",
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Body />
    </MantineProvider>
  );
}

export default App;
