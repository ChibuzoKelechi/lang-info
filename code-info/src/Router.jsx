import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import Info from './Pages/Info'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}