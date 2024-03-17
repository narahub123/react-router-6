import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import "./App.css";
import "../data/server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/host",
        children: [
          {
            path: "/host",
            element: <Dashboard />,
          },
          {
            path: "/host/income",
            element: <Income />,
          },
          {
            path: "/host/reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vans",
        element: <Vans />,
      },
      {
        path: "/vans/:id",
        element: <VanDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
