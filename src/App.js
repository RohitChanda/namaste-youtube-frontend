import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainCotainer from "./components/MainCotainer";
import WatchPage from "./components/WatchPage";
function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainCotainer />,
        },
        {
          path: "/results",
          element: <MainCotainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
