import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserData } from "./redux/UserSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkValidity = async () => {
    try {
      const result = await axios.get("http://localhost:4000/api/v1/dashboard");
      dispatch(addUserData(result.data.user));
    } catch (err) {
      console.log(err.message)
      toast.warning(err.message);
      navigate("/login");
    }
  };
  useEffect(() => {
    checkValidity();
  }, []);

  return (
    <div className="flex bg-slate-100 ">
      <div className="w-2/12">
        <LeftDashboard />
      </div>
      <div className="w-9/12 mx-auto">
        <Searchbar />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};
