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
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import { requiredAuth } from "./utils/requiredAuth";

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
        path: "/login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async ({ request }) => await requiredAuth(request),
          },
          {
            path: "income",
            element: <Income />,
            loader: async ({ request }) => await requiredAuth(request),
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async ({ request }) => await requiredAuth(request),
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
            errorElement: <Error />,
          },
          {
            path: "vans/:id",
            element: <HostVanDetail />,
            loader: hostVanDetailLoader,
            errorElement: <Error />,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
                loader: async ({ request }) => await requiredAuth(request),
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
                loader: async ({ request }) => await requiredAuth(request),
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
                loader: async ({ request }) => await requiredAuth(request),
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
        errorElement: <Error />,
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
