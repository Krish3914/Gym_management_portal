import { MdKeyboardArrowLeft } from "react-icons/md";
import iconImage from "../images/favicon/favicon.ico";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-100">
      <div className="bg-white p-4 flex flex-col justify-between gap-10 w-3/12 shadow-lg rounded-lg">
        <div className="flex gap-2 justify-center">
          <img src={iconImage} className="w-10 self-center"></img>
          <span className="text-2xl font-semibold opacity-50">sneat</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl opacity-70 font-normal ">Forgot Password?</span>
          <p className="opacity-60 text-sm">
            Enter your email and we'll send you instructions to reset your
            password
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-sm opacity-60">EMAIL</label>
          <input type="text" id="email" placeholder="Enter Your Email" className="p-2  rounded-md border-2"/>
          <button className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center ">Send Reset Link</button>
          <Link to={"/login"} className="mx-auto">
          <span className="flex items-center mx-auto text-[#696cff]">
            <MdKeyboardArrowLeft className="text-lg"/>
            Back to login
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
