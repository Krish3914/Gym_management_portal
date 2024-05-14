import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { makeInvisible } from "../redux/TemplateSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Dashboard from "./Dashboard";
import YourComponent from "./YourComponent";

export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userData.name);
  const role = useSelector((state) => state?.user?.userData?.role);
  const noOfUsers = useSelector((state) => state.client.client);
  const expiredUserCount = useSelector(
    (state) => state.client.expiredUserCount
  );
  useEffect(() => {
    toast.dismiss();
  }, []);
  return (
    <div className="" onClick={() => dispatch(makeInvisible(false))}>
      <table className=" flex flex-col gap-5">
        <tr className="flex gap-7">
          <td className="w-8/12 bg-white rounded-lg">
            {" "}
            <div className="bg-white rounded-xl p-2">
              <div className="flex ">
                <div className="flex mx-auto flex-col gap-6 mt-2 w-1/2">
                  <span className="text-purple-400 font-medium text-xl">
                    Welcome{" "}
                    <span className="text-xl ">{role ? role : userName}🎉</span>
                  </span>
                  <span className="opacity-65">
                    You have done
                    <span className="font-semibold leading-3"> 0% </span> more
                    sales today. Check your new badge in your profile.
                  </span>
                  <Link to={"/dashboard/traineeform"}>
                    <span className="w-3/12 py-2 px-1  border-2 border-purple-300 text-purple-400  hover:bg-purple-600 text-center hover:text-white rounded-md duration-500 ">
                      {" "}
                      Add Members
                    </span>
                  </Link>
                </div>

                <img
                  src={require("../../images/illustrations/man-with-laptop-light.png")}
                  className="w-20 h-30 lg:w-4/12 self-center"
                />
              </div>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <img
                  src={require("../../images/icons/unicons/chart-success.png")}
                  className="w-10"
                />
                <BsThreeDotsVertical />
              </div>
              <Link to={"/dashboard/tables"}>
                <h2 className="text-lg">Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">
                {noOfUsers?.length}
              </span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <img
                  src={require("../../images/icons/unicons/cc-primary.png")}
                  className="w-10"
                />
                <BsThreeDotsVertical />
              </div>
              <Link to={"/dashboard/salescard"}>
                <h2 className="text-lg">Sales</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">0</span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-7">
          <td className="bg-white w-8/12 rounded-lg p-4 h-65">
            <Dashboard />
          </td>
          <td className="w-4/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <img
                  src={require("../../images/icons/unicons/cc-success.png")}
                  className="w-10"
                />
                <BsThreeDotsVertical />
              </div>
              <Link to={"/dashboard/notifications"}>
                <h2 className="text-lg text-shadow-md">Notifications</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">
                {expiredUserCount}
              </span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
          <td className="w-4/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <img
                  src={require("../../images/icons/unicons/paypal.png")}
                  className="w-10"
                />
                <BsThreeDotsVertical />
              </div>
              <Link to={"/dashboard/transactioncard"}>
                <h2 className="text-lg">New Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">0</span>
              <span className="text-red-400 ">0%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-2">
          <YourComponent/>
        </tr>
      </table>
    </div>
  );
};

// <td className="bg-white w-8/12 rounded-lg p-4 h-65">
//             <Dashboard />
//           </td>
//           <td>
//             <table>
//               <tbody>
//                 <tr>
//                   <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//                     {/* Content for first nested cell */}
//                     <div className="flex flex-col gap-2">
//                       <div className="flex items-center justify-between">
//                         <img
//                           src={require("../../images/icons/unicons/cc-success.png")}
//                           className="w-10"
//                         />
//                         <BsThreeDotsVertical />
//                       </div>
//                       <Link to={"/dashboard/notifications"}>
//                         <h2 className="text-lg text-shadow-md">
//                           Notifications
//                         </h2>
//                       </Link>
//                       <span className="text-2xl font-medium opacity-65">
//                         {expiredUserCount}
//                       </span>
//                       <span className="text-green-400 ">0%</span>
//                     </div>
//                   </td>
//                   <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//                     {/* Content for second nested cell */}
//                     <div className="flex flex-col gap-2">
//                       <div className="flex justify-between items-center">
//                         <img
//                           src={require("../../images/icons/unicons/paypal.png")}
//                           className="w-10"
//                         />
//                         <BsThreeDotsVertical />
//                       </div>
//                       <Link to={"/dashboard/transactioncard"}>
//                         <h2 className="text-lg">New Members</h2>
//                       </Link>
//                       <span className="text-2xl font-medium opacity-65">0</span>
//                       <span className="text-red-400 ">0%</span>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//                     {/* Content for third nested cell */}
//                     <div className="flex flex-col gap-2">
//                       <div className="flex items-center justify-between">
//                         <img
//                           src={require("../../images/icons/unicons/cc-success.png")}
//                           className="w-10"
//                         />
//                         <BsThreeDotsVertical />
//                       </div>
//                       <Link to={"/dashboard/notifications"}>
//                         <h2 className="text-lg text-shadow-md">
//                           Notifications
//                         </h2>
//                       </Link>
//                       <span className="text-2xl font-medium opacity-65">
//                         {expiredUserCount}
//                       </span>
//                       <span className="text-green-400 ">0%</span>
//                     </div>
//                   </td>
//                   <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//                     {/* Content for fourth nested cell */}
//                     <div className="flex flex-col gap-2">
//                       <div className="flex justify-between items-center">
//                         <img
//                           src={require("../../images/icons/unicons/paypal.png")}
//                           className="w-10"
//                         />
//                         <BsThreeDotsVertical />
//                       </div>
//                       <Link to={"/dashboard/transactioncard"}>
//                         <h2 className="text-lg">New Members</h2>
//                       </Link>
//                       <span className="text-2xl font-medium opacity-65">0</span>
//                       <span className="text-red-400 ">0%</span>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </td>
// <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between">
//                 <img
//                   src={require("../../images/icons/unicons/cc-success.png")}
//                   className="w-10"
//                 />
//                 <BsThreeDotsVertical/>
//                 </div>
//                 <Link to={"/dashboard/notifications"}>
//                   <h2 className="text-lg text-shadow-md">Notifications</h2>
//                 </Link>
//                 <span className="text-2xl font-medium opacity-65">{expiredUserCount}</span>
//                 <span className="text-green-400 ">0%</span>
//               </div>
//             </td>
//             <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
//               <div className="flex flex-col gap-2">
//                 <div className="flex justify-between items-center">
//                 <img
//                   src={require("../../images/icons/unicons/paypal.png")}
//                   className="w-10"
//                 />
//                 <BsThreeDotsVertical/>
//                 </div>
//                 <Link to={"/dashboard/transactioncard"}>
//                   <h2 className="text-lg">New Members</h2>
//                 </Link>
//                 <span className="text-2xl font-medium opacity-65">0</span>
//                 <span className="text-red-400 ">0%</span>
//               </div>
//             </td>

/*<tr className="flex gap-7">
          <td className="bg-white w-8/12 rounded-lg p-4 h-65">
            <Dashboard />
          </td>
          <td>
            <tr>
              <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <img
                      src={require("../../images/icons/unicons/cc-success.png")}
                      className="w-10"
                    />
                    <BsThreeDotsVertical />
                  </div>
                  <Link to={"/dashboard/notifications"}>
                    <h2 className="text-lg text-shadow-md">Notifications</h2>
                  </Link>
                  <span className="text-2xl font-medium opacity-65">
                    {expiredUserCount}
                  </span>
                  <span className="text-green-400 ">0%</span>
                </div>
              </td>
              <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <img
                      src={require("../../images/icons/unicons/paypal.png")}
                      className="w-10"
                    />
                    <BsThreeDotsVertical />
                  </div>
                  <Link to={"/dashboard/transactioncard"}>
                    <h2 className="text-lg">New Members</h2>
                  </Link>
                  <span className="text-2xl font-medium opacity-65">0</span>
                  <span className="text-red-400 ">0%</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <img
                      src={require("../../images/icons/unicons/cc-success.png")}
                      className="w-10"
                    />
                    <BsThreeDotsVertical />
                  </div>
                  <Link to={"/dashboard/notifications"}>
                    <h2 className="text-lg text-shadow-md">Notifications</h2>
                  </Link>
                  <span className="text-2xl font-medium opacity-65">
                    {expiredUserCount}
                  </span>
                  <span className="text-green-400 ">0%</span>
                </div>
              </td>
              <td className="w-2/12 bg-white rounded-lg p-2 h-1/3 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <img
                      src={require("../../images/icons/unicons/paypal.png")}
                      className="w-10"
                    />
                    <BsThreeDotsVertical />
                  </div>
                  <Link to={"/dashboard/transactioncard"}>
                    <h2 className="text-lg">New Members</h2>
                  </Link>
                  <span className="text-2xl font-medium opacity-65">0</span>
                  <span className="text-red-400 ">0%</span>
                </div>
              </td>
            </tr>
          </td>
        </tr>*/
