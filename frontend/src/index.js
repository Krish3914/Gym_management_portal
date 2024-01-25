import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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
import { PaymentsCard } from "./Component/PaymentsCard";
import { ForgotPassword } from "./Component/ForgotPassword";
import { ClientsTable } from "./Component/Dashboard/leftDashBoard/ClientsTable";
import { Home } from "./Component/Home";
import { ContactUs } from "./Component/ContactUs";
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
        path:"/contact",
        element:<ContactUs/>
      }
      ,
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
        path: "paymentscard",
        element: <PaymentsCard />,
      },]}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
