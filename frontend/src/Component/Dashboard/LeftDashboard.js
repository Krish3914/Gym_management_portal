import { FaChevronRight } from "react-icons/fa";
import iconImage from "../../images/favicon/favicon.ico";
import { Link } from "react-router-dom";
import { Searchbar } from "../Searchbar";
import logopng from "../../images/logo.png"

export const LeftDashboard = () => {
  return (
    <>
      <div className="bg-white p-4 flex flex-col gap-4 h-screen">
        <div className="flex flex-col gap-2 ">
          <Link to={"navbar"}>
            {" "}
            <div className="flex self-start gap-2 ">
              <img src={logopng}/>
            </div>
          </Link>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md text-purple-700">
            <Link to={"navbar"}> Dashboard</Link>
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
            <Link to={"/dashboard/traineeform"}>
              <div className="flex justify-between items-center cursor-pointer adduser">
                Add User
              </div>
            </Link>
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
            <Link to={"/dashboard/tables"}>
              <div className="flex justify-between items-center cursor-pointer adduser">
                Table
              </div>
            </Link>
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
            <Link to={"/dashboard/support"}>
              <div className="flex justify-between items-center cursor-pointer adduser">
                Support
              </div>
            </Link>
          </div>
          <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
            <Link to={"/dashboard/FAQ"}>
              <div className="flex justify-between items-center cursor-pointer adduser">
                FAQ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
