import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { Template } from "./Template";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Searchbar } from "./Searchbar";
import { ToastContainer,toast } from "react-toastify";

export const Dashboard = () => {
  const [userData,setUserData] = useState();
  const navigate = useNavigate();
  const checkValidity = async () => {
   try{
  
      const result = await fetch("http://localhost:4000/api/v1/dashboard");
      const output = await result.json();
      console.log(output.user);
      setUserData(output.user);
   } catch(err){
    console.log(err.message);
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
        <Searchbar userData={userData}/>
        <Outlet />
      </div>
      <ToastContainer/>
    </div>
  );
};
