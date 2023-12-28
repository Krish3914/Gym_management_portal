import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa";
import iconImage from "../images/favicon/favicon.ico";

export const Dashboard = () => {
  useEffect(() => {
    toast.success("logged in Successfully");
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4 bg-slate-100 ">
      <div className="col-span-1 bg-white p-4 ">
        <div className="flex flex-col gap-4">
          <div className="flex self-start gap-2 ">
            <img src={iconImage} className="h-10 self-center"></img>
            <span className="text-2xl font-semibold opacity-70">sneat</span>
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md">
            Dashboard
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col">
           <div className="flex justify-between items-center cursor-pointer adduser pb-2">
            Add User
            <FaChevronRight className="right"/>
           </div>
            <div className="flex-col hidden basicinput gap-3">
                <li className="cursor-pointer">Basic Input</li>
                <li className="cursor-pointer">Input Groups</li>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 ">
        <div className="flex items-center justify-between bg-white m-2 rounded-lg shadow-xl">
          <div className="flex items-center gap-2">
            <CiSearch className="scale-125 stroke-1 ml-4" />
            <input className="p-2" />
          </div>
          <img
            src={require("../images/avatars/5.png")}
            className="w-16 rounded-full p-2"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-3/12 gap-3">
          <div className="flex flex-col bg-white shadow-xl p-2 gap-2 rounded-lg">
            <img
              src={require("../images/icons/unicons/chart-success.png")}
              className="w-10"
            />
            <h2 className="opacity-60 font-normal text-lg">Users</h2>
            <span className="text-2xl font-medium opacity-60">12,628</span>
            <span className="text-green-500">78.2%</span>
          </div>
          <div className="flex flex-col bg-white shadow-xl p-2 gap-2 rounded-lg">
            <img
              src={require("../images/icons/unicons/cc-primary.png")}
              className="w-10"
            />
            <h2 className="opacity-60 font-normal text-lg">Pending</h2>
            <span className="text-2xl font-medium opacity-60">12,628</span>
            <span className="text-green-500">78.2%</span>
          </div>
          <div className="flex flex-col bg-white shadow-xl p-2 gap-2 rounded-lg">
            <img
              src={require("../images/icons/unicons/paypal.png")}
              className="w-10"
            />
            <h2 className="opacity-60 font-normal text-lg">Payment</h2>
            <span className="text-2xl font-medium opacity-60">12,628</span>
            <span className="text-green-500">78.2%</span>
          </div>
          <div className="flex flex-col bg-white shadow-xl p-2 gap-2 rounded-lg">
            <img
              src={require("../images/icons/unicons/wallet-info.png")}
              className="w-10"
            />
            <h2 className="opacity-60 font-normal text-lg">New Users</h2>
            <span className="text-2xl font-medium opacity-60">12,628</span>
            <span className="text-green-500">78.2%</span>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
