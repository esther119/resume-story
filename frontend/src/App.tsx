import React from "react";
import logo from "./logo.svg";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import StoryPresentation from "./pages/StoryPresentation";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div className="App">
        <header className="App-header">
          <StoryPresentation />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
