import Body from "./components/Body";
import Navbar from "./components/Navbar";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Body />
    </MantineProvider>
  );
}

export default App;
