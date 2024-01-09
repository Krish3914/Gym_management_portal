import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import {Dashboard} from "./Component/Dashboard";
import {Newadduser} from "./Component/Dashboard/leftDashBoard/Newadduser"
import { Navbar } from "./Component/Dashboard/Navbar";
import { Table } from "./Component/Dashboard/leftDashBoard/Tables";
import { Provider } from "react-redux";
import userStore from "./Component/redux/redux";

const App = () => {
  return (
    <Provider store={userStore}>
      <div className="app">
      <Outlet />
    </div>
    </Provider>
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
        path:"dashboard",
        element:<Dashboard/>,
        children:[{
          path:"traineeform",
          element:<Newadduser/>
        },{
          path:"/dashboard",
          element:<Navbar/>
        },{
          path:"tables",
          element:<Table/>
        }]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
