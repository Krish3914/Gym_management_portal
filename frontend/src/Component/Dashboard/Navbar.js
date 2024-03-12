import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { makeInvisible } from "../redux/TemplateSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userData.name);
  const role = useSelector((state) => state?.user?.userData?.role);
  const noOfUsers = useSelector((state) => state.client.client);
  const expiredUserCount = useSelector((state)=>state.client.expiredUserCount)
  return (
    <div className="" onClick={()=>dispatch(makeInvisible(false))}>
      <table className=" flex flex-col gap-10 bg-red-400">
        <tr className="flex gap-10">
          <td className="w-8/12 bg-white rounded-lg ">
            {" "}
            <div className="bg-white rounded-xl p-2">
              <div className="flex ">
                <div className="flex mx-auto flex-col gap-6 mt-2 w-1/2 text-xs">
                  <span className="text-purple-400 font-medium text-xl">
                    Welcome <span className="text-xl ">{role?role:userName}🎉</span>
                  </span>
                  <span className="opacity-65">
                    You have done
                    <span className="font-semibold leading-3"> 0% </span> more
                    sales today. Check your new badge in your profile.
                  </span>
                  <Link to={"/dashboard/traineeform"}><span className="w-3/12 py-2 px-1  border-2 border-purple-300 text-purple-400  hover:bg-purple-600 text-center hover:text-white rounded-md duration-500 ">
                    {" "}
                    Add Members
                  </span>
                  </Link>
                </div>
                
                <img
                  src={require("../../images/illustrations/man-with-laptop-light.png")}
                  className="w-24 h-24 lg:w-4/12 self-center"
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
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/tables"}>
                <h2 className="text-lg">Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">{noOfUsers?.length}</span>
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
        <tr className="flex gap-10">
          <td className="bg-white w-8/12"></td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
              <img
                src={require("../../images/icons/unicons/cc-success.png")}
                className="w-10"
              />
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/notifications"}>
                <h2 className="text-lg text-shadow-md">Notifications</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">{expiredUserCount}</span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
              <img
                src={require("../../images/icons/unicons/paypal.png")}
                className="w-10"
              />
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/transactioncard"}>
                <h2 className="text-lg">New Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">0</span>
              <span className="text-red-400 ">0%</span>
            </div>
          </td>
        </tr>
      </table>
      
      <footer class="content-footer footer bg-footer-theme absolute bottom-0">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0 hidden lg:block">
                Product by Maskottchen Technology
                  <a href="https://maskottchen.tech/" target="_blank" class="footer-link fw-bolder" className=" text-[#696cff]"> Click Here</a>
                </div>
              </div>
            </footer>
    </div>
  );
};
