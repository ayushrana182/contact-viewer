import TopBar from "./components/TopBar";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import baseTheme from "./theme";
import UserList from "./components/UserList";

// Chakra UI Theme extend
const theme = extendTheme(baseTheme);

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Container>
          <TopBar />
          <UserList />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
