import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },{
    path:'*',
    Component:NotFound
  },
]);
