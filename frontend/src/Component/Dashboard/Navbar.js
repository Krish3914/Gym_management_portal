import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Navbar = () => {
  const userName = useSelector((state) => state.user.userData.name);
  const role = useSelector((state) => state?.user?.userData?.role);
  const noOfUsers = useSelector((state) => state.client.client);
  const expiredUserCount = useSelector((state)=>state.client.expiredUserCount)
  return (
    <div className="">
      <table className=" flex flex-col gap-10">
        <tr className="flex gap-10">
          <td className="w-8/12 bg-white rounded-lg ">
            {" "}
            <div className="bg-white rounded-xl p-2">
              <div className="flex">
                <div className="flex mx-auto flex-col gap-4 mt-2">
                  <span className="text-purple-400 font-medium text-xl">
                    WelCome <span className="text-xl ">{role?role:userName}🎉</span>
                  </span>
                  <span className="opacity-65">
                    You have done
                    <span className="font-semibold leading-3"> 0% </span> more
                    sales today. Check your new badge in your profile.
                  </span>
                  <span className="w-3/12 p-1 border-2 border-purple-300 text-purple-400  hover:bg-purple-600 text-center hover:text-white rounded-md duration-500 ">
                    {" "}
                    View Badges
                  </span>
                </div>
                <img
                  src={require("../../images/illustrations/man-with-laptop-light.png")}
                  className="w-4/12"
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
        {/* <tr className="flex gap-10 justify-center">
        <td className="bg-white w-8/12"></td>
          <td className="flex flex-col w-4/12 gap-4 bg-white p-4">
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/paypal.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Paypal</span>
                <span className="text-sm">Send money</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/wallet.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Send Wallet</span>
                <span className="text-sm">Mac'D</span>
              </div>
              <div>812Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/cc-primary.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Transfer</span>
                <span className="text-sm">Refund</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/cc-success.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Credit Card</span>
                <span className="text-sm">Orderd books</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/chart-success.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Wallet</span>
                <span className="text-sm">Star Bucks</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/wallet-info.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Master card</span>
                <span className="text-sm">Ordered Food</span>
              </div>
              <div>82Usd</div>
            </div>
          </td>
        </tr> */}
      </table>
      
      <footer class="content-footer footer bg-footer-theme absolute bottom-0">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©
                    {new Date().getFullYear()}
                  , made with ❤️ by 
                  <a href="https://maskottchen.tech/" target="_blank" class="footer-link fw-bolder"> Maskottchen Technology</a>
                </div>
              </div>
            </footer>
    </div>
  );
};
