import Body from "./components/Body";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "yellow",
  primaryShade: 5,
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
