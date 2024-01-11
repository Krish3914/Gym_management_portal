import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Template } from "./Template";

export const Searchbar = () => {


  const [showTemplate, setshowTemplate] = useState(false);
  return (
    <div className=" flex justify-between bg-white rounded-xl mt-4 mb-10 shadow-xl">
      <div className=" p-4 flex items-center w-full gap-4">
        <CiSearch className="ml-4 text-xl" />
        <input className="p-1 border-none" placeholder="Search.." />
      </div>
      <img
        src={require("../images/avatars/6.png")}
        className="w-14 h-12 rounded-full cursor-pointer my-auto"
        onClick={() => setshowTemplate(!showTemplate)}
      />
      {showTemplate ? <Template/> : <div className="hidden"></div>}
    </div>
  );
};
