import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import {Dashboard} from "./Component/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
