import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Template = () => {
  const navigate = useNavigate();
  // Accessing the name of user from redux Store
  const userName = useSelector((store) => store.user.userData.name);
  // const handleLogout = ()=>{
  //   localStorage.removeItem("token");
  //   navigate("/");
  // }
  return (
    <div className="absolute text-center right-10 top-14 flex w-1/12 p-4 bg-white gap-4 z-20 justify-between rounded-xl shadow-xl flex-col">
      <div className="flex justify-center flex-row gap-5 ">
        <img
          src={require("../images/avatars/6.png")}
          className="w-8 rounded-full "
        />
        <div className="self-center">{userName?.split(" ")[0]}</div>
      </div>
      <Link to={"user"}>
        {" "}
        <div className="cursor-pointer">My Profile</div>
      </Link>
      <Link>
        {" "}
        <div className="cursor-pointer ">Settings</div>{" "}
      </Link>
      <Link>
        {" "}
        <div
          className="cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("persist:userData");
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </div>
      </Link>
    </div>
  );
};
