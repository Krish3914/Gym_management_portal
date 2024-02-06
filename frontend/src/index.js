import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import { Dashboard } from "./Component/Dashboard";
import { Newadduser } from "./Component/Dashboard/leftDashBoard/Newadduser";
import { Navbar } from "./Component/Dashboard/Navbar";
import { Provider } from "react-redux";
import userStore, { persistor } from "./Component/redux/redux";
import { PersistGate } from "redux-persist/integration/react";
import { UserProfile } from "./Component/Dashboard/leftDashBoard/UserProfile";
import { SalesCard } from "./Component/SalesCard";
import { TransactionsCard } from "./Component/TransactionsCard";
import { Notifications } from "./Component/Notification";
import { ForgotPassword } from "./Component/ForgotPassword";
import { ClientsTable } from "./Component/Dashboard/leftDashBoard/ClientsTable";
import { Home } from "./Component/Home";
import { ContactUs } from "./Component/ContactUs";
import { PaymentSuccess } from "./Component/SuccessPayment";
import { Paymentcancel } from "./Component/CancelPayment";
import { Classes } from "./Component/Classes";
import { Blogs } from "./Component/Blogs";
import { About } from "./Component/About";

const App = () => {
  return (
    <Provider store={userStore}>
      <div className="app">
        <PersistGate loading={null} persistor={persistor}>
          <Outlet />
        </PersistGate>
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
        element: <Home />,
      },
      {
        path:"/classes",
        element:<Classes/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/aboutus",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/success-payment",
        element:<PaymentSuccess/>

      },{
        path:"/cancel-payment",
        element:<Paymentcancel/>
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/forgotpassword",
        element:<ForgotPassword/>
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "traineeform",
            element: <Newadduser />,
          },
          {
            path: "navbar",
            element: <Navbar />,
          },
          {
            path: "tables",
            element: <ClientsTable />,
          },
          {
            path: "user",
            element: <UserProfile />,
          },
      {
        path: "salescard",
        element: <SalesCard />,
      },
      {
        path: "transactioncard",
        element: <TransactionsCard />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      }]},
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
