import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Template = () => {
    const userName = useSelector((store)=>store.user.userData[0]);
    console.log(userName.name);
  return (
    <div className="absolute text-center right-10 top-14 flex w-1/12 p-4 shadow-md bg-white gap-4 justify-between rounded-sm flex-col">
      <div className="flex justify-center flex-row gap-5 ">
        <img
          src={require("../images/avatars/6.png")}
          className="w-8 rounded-full "
        />
        <div className="self-center">{userName.name}</div>
      </div>
      <NavLink to={"user"}>
        {" "}
        <div className="cursor-pointer">My Profile</div>
      </NavLink>
      <NavLink >
        {" "}
        <div className="cursor-pointer ">Settings</div>{" "}
      </NavLink>
      <NavLink >
        {" "}
        <div className="cursor-pointer">Logout</div>{" "}
      </NavLink>
    </div>
  );
};
