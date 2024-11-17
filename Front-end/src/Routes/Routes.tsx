import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import CapesLab from "@/pages/CapesLab/CapesLab";
import Search from "@/pages/Search/Search";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        {
          path: "capeslab",
          element: (
            <ProtectedRoute>
              <CapesLab />
            </ProtectedRoute>
          ),
        },
        {
          path: "search",
          element: (
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);