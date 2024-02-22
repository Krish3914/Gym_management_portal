import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Template } from "./Template";
import { useDispatch, useSelector } from "react-redux";
import { Showtable } from "./Dashboard/leftDashBoard/Showtable";
import { addClientSearch } from "./redux/clientSlice";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.client.client);
  const userInfo = useSelector((store)=>store.user.userData);
  const [showTemplate, setshowTemplate] = useState(false);
  const [searchData, setSearchData] = useState("");

  const changeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const searchHandle = () => {
    // console.log("this data we will interate",selector);
    const clients = selector.filter((data) =>
     data.name.toLowerCase().includes(searchData.toLowerCase()) || data.phone.toString().includes(searchData)
    );
    dispatch(addClientSearch(clients));
    setSearchData("");
  };

  return (
    <div className=" flex justify-between bg-white rounded-xl mt-4 mb-10 shadow-xl">
      <div className=" p-4 flex items-center w-full gap-4">
        <CiSearch className="ml-4 text-xl" />
        <input
          className=" searchinputs p-1 focus:border-none"
          placeholder="Search by name, phone etc.."
          value={searchData}
          onChange={changeHandle}
        />
        {searchData?(
        <span
          className="cursor-pointer bg-purple-400  text-white border-2 border-slate-300  py-1 px-3 rounded-lg hover:bg-purple-500 hover:text-white hover:font-medium duration-500"
          onClick={searchHandle}
        >
          Search
        </span>
        ):<div className="hidden"></div>}
      </div>
      <img
        src={userInfo?.photo?userInfo.photo:require("../images/avatars/6.png")}
        className="w-14 h-14 rounded-full cursor-pointer my-auto"
        onClick={() => setshowTemplate(!showTemplate)}
      />
      {showTemplate ? <Template /> : <div className="hidden"></div>}
    </div>
  );
};
