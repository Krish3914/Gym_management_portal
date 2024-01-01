import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Template } from "../../Component/Template";

export const Navbar = () => {
  const [showTemplate, setshowTemplate] = useState(false);
  return (
    <div className="flex flex-col">
      <div className=" flex justify-between bg-white rounded-xl mt-2 shadow-xl">
        <div className=" p-4 flex items-center w-full gap-4">
          <CiSearch className="ml-4 text-xl" />
          <input className="p-1 border-none" placeholder="Search.." />
        </div>
        <img
          src={require("../../images/avatars/6.png")}
          className="w-14 h-12 rounded-full self-center"
          onClick={() => setshowTemplate(!showTemplate)}
        />
        {showTemplate ? <Template /> : <div className=""></div>}
      </div>
      <table className="bg-white">
        <tr className="flex gap-10 ">
          <td className="w-8/12 bg-white rounded-lg ">
            {" "}
            <div className="bg-white rounded-xl p-2">
              <div className="flex">
                <div className="flex mx-auto flex-col gap-4 mt-2">
                  <span
                    className="text-purple-400 font-medium opacity-65 text-lg
          "
                  >
                    Congratulations John! 🎉
                  </span>
                  <span className="opacity-65">
                    You have done<span className="font-semibold"> 72% </span>{" "}
                    more sales today. Check your new badge in your profile.
                  </span>
                  <span className="w-3/12 p-1 border-2 border-purple-300 text-purple-400  hover:bg-purple-600 text-center hover:text-white rounded-md duration-500 ">
                    {" "}
                    View Badges
                  </span>
                </div>
                <img
                  src={require("../../images/illustrations/man-with-laptop-light.png")}
                  className="w-3/12"
                />
              </div>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <img
                src={require("../../images/icons/unicons/chart-success.png")}
                className="w-10"
              />
              <h2 className="text-lg">Users</h2>
              <span className="text-2xl font-medium opacity-65">12,628</span>
              <span className="text-green-400 ">78.2%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <img
                src={require("../../images/icons/unicons/cc-primary.png")}
                className="w-10"
              />
              <h2 className="text-lg">sales</h2>
              <span className="text-2xl font-medium opacity-65">1,628</span>
              <span className="text-green-400 ">28%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-10">
          <td className="bg-white w-8/12"></td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <img
                src={require("../../images/icons/unicons/cc-success.png")}
                className="w-10"
              />
              <h2 className="text-lg">Payments</h2>
              <span className="text-2xl font-medium opacity-65">14,,628</span>
              <span className="text-green-400 ">58.2%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <img
                src={require("../../images/icons/unicons/paypal.png")}
                className="w-10"
              />
              <h2 className="text-lg">Transactions</h2>
              <span className="text-2xl font-medium opacity-65">2428</span>
              <span className="text-red-400 ">24%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-10 justify-center">
          <td className="w-8/12"></td>
          <td className="flex flex-col w-4/12 gap-4">
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/paypal.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Paypal</span>
              <span className="text-sm">Send money</span>
            </div>
            <div>82Usd</div>
            </div>
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/wallet.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Send Wallet</span>
              <span className="text-sm">Mac'D</span>
            </div>
            <div>812Usd</div>
            </div>
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/cc-primary.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Transfer</span>
              <span className="text-sm">Refund</span>
            </div>
            <div>82Usd</div>
            </div>
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/cc-success.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Credit Card</span>
              <span className="text-sm">Orderd books</span>
            </div>
            <div>82Usd</div>
            </div>
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/chart-success.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Wallet</span>
              <span className="text-sm">Star Bucks</span>
            </div>
            <div>82Usd</div>
            </div>
            <div className="flex gap-4">
            <img src={require("../../images/icons/unicons/wallet-info.png")} className="w-10 h-9 " />
            <div className="flex flex-col text-xs">
              <span>Master card</span>
              <span className="text-sm">Ordered Food</span>
            </div>
            <div>82Usd</div>
            </div>

          </td>
        </tr>
      </table>
    </div>
  );
};
