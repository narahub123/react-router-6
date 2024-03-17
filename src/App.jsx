import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Van/HostVanInfo";
import HostVanPricing from "./pages/Van/HostVanPricing";
import HostVanPhotos from "./pages/Van/HostVanPhotos";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";

import "./App.css";
import "../data/server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
          },
          {
            path: "vans/:id",
            element: <HostVanDetail />,
            loader: hostVanDetailLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: <Error />,
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        loader: vanDetailLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "#",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
