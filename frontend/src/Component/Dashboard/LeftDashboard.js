import { FaChevronRight } from "react-icons/fa";
import iconImage from "../../images/favicon/favicon.ico";
import { Link } from "react-router-dom";

export const LeftDashboard = () => {
  return (
    <div className=" bg-white p-4 flex flex-col gap-4">
      
      <div className="flex flex-col gap-4 ">
        <div className="flex self-start gap-2 ">
          <img src={iconImage} className="h-10 self-center "></img>
          <span className="text-2xl font-semibold opacity-70">sneat</span>
        </div>
        <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md text-purple-700">
          Dashboard
        </div>
        <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
          <Link to={"/dashboard/traineeform"}>
            <div className="flex justify-between items-center cursor-pointer adduser">
              Add User
              {<FaChevronRight />}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
