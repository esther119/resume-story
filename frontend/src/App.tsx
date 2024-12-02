import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import StoryPortfolio from "./pages/StoryPortfolio";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StoryPresentation from "./pages/StoryPresentation";
import ExperienceInput from "./pages/ExperienceInput";

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <ExperienceInput />,
  },
  {
    path: "/collection",
    element: <StoryPortfolio />,
  },
  {
    path: "/story/:storyId",
    element: <StoryPresentation />,
  },
]);

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div className="App">
        <header className="App-header">
          <RouterProvider router={router} />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
