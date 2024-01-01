import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Outlet } from "react-router-dom";
import { Template } from "./Template";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Dashboard = () => {
  const [showTemplate, setshowTemplate] = useState(false);
  return (
    <div className="flex bg-slate-100 ">
      
      <div className="w-2/12">
        <LeftDashboard />
      </div>

      <div className="w-9/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
