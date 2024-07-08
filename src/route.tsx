import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import DiscoveryPage from "./pages/DiscoveryPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home/",
        element: <HomePage />,
      },
      {
        path: "serie/",
        element: <DiscoveryPage mediaType="tv" />,
      },
      {
        path: "movie/",
        element: <DiscoveryPage mediaType="movie" />,
      },
      {
        path: "search/",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
