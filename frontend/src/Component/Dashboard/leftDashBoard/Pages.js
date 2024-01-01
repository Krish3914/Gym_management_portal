import {  useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Components } from "./Components";

export const Pages = () => {
  const [basicInput, setbasicInput] = useState(false);
  return (
    <div className="flex flex-col gap-4 ">
         <span className="opacity-65">Pages</span>
      <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
        <div
          className="flex justify-between items-center cursor-pointer adduser"
          onClick={() => setbasicInput(!basicInput)}
        >
          Account Settings
          {basicInput ? (
            <FaChevronRight className="right" />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {basicInput ? (
          <div className="flex flex-col basicInput gap-5 ">
            <li className="cursor-pointer">Account</li>
            <li className="cursor-pointer">Notification</li>
            <li className="cursor-pointer">Connection</li>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
      <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
        <div
          className="flex justify-between items-center cursor-pointer adduser"
          onClick={() => setbasicInput(!basicInput)}
        >
          Authotication
          {basicInput ? (
            <FaChevronRight className="right" />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {basicInput ? (
          <div className="flex flex-col basicInput gap-5 ">
            <li className="cursor-pointer">Account</li>
            <li className="cursor-pointer">Notification</li>
            <li className="cursor-pointer">Connection</li>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
      <div className="bg-purple-200 p-3 font-medium opacity-80 rounded-md flex justify-between flex-col gap-3">
        <div
          className="flex justify-between items-center cursor-pointer adduser"
          onClick={() => setbasicInput(!basicInput)}
        >
          Misc
          {basicInput ? (
            <FaChevronRight className="right" />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {basicInput ? (
          <div className="flex flex-col basicInput gap-5 ">
            <li className="cursor-pointer">Account</li>
            <li className="cursor-pointer">Notification</li>
            <li className="cursor-pointer">Connection</li>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
      {/* <Components/> */}
    </div>
  );
};
