import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import Info from './Pages/Info'
import About from "./Pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}