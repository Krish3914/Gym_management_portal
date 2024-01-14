import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  let userRedux = useSelector((store)=>store.user.userData)
  const navigate = useNavigate();
  const checkValidity = async () => {
    const localStorageToken = localStorage.getItem('token');
    console.log("this is local token from session storage",localStorageToken);
    try {
      const result = await axios.get("http://localhost:4000/api/v1/dashboard",{ headers: {
        Authorization: `Bearer ${localStorageToken}`,
      },});
     
      console.log(result);
      console.log("this is userRedux",userRedux);
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
      </div>{console.log("priting for testin")}
      <div className="w-9/12 mx-auto">
        <Searchbar />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};
