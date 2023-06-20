import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./compenents/App/App";
import Home from ".//pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import Location from ".//pages/Location/Location";
import About from ".//pages/About/About";

const routerKasa = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/location/:id",
        element: <Location />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerKasa} />
  </React.StrictMode>
);
