import { Link, useNavigate } from "react-router-dom";
import iconImage from "../images/favicon/favicon.ico";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "./redux/UserSlice";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const[showEye,setshowEye] = useState(false);
  const selectorUser = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const loginUrl = "http://localhost:4000/api/v1/login";

  const navigate = useNavigate();

  const changeHandle = (event) => {
    const { name, type, value, checked } = event.target;
    setSignInData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const LoginUser = async (data) => {
    const realData = {
      email: data.email,
      password: data.password,
    };

    try {
      const savedRes = await axios.post(loginUrl, { ...realData });
      //adding the user information in the userSlice redux
      
      if (savedRes.status === 200) {
        const user = savedRes.data.user;
        dispatch(addUserData(user));
        localStorage.setItem("token",savedRes.data.user.token);
        navigate("/dashboard/navbar");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
    return false;
  };

  const signInHandle = (e) => {
    e.preventDefault();
    try {
      if (!signInData.email || !signInData.password) {
        toast.warning("Please Fill All the details");
        throw new Error("some error");
      }


      //if all details are filled then it called LoginUser function
      LoginUser(signInData);
    } catch (err) {
      console.log(err.status);
    }
  };

  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center relative">
      <div className="w-3/12 flex flex-col gap-5 rounded-lg bg-white p-5 my-2 relative">
        <div className="flex self-center gap-2 ">
          <img src={iconImage} className="w-10 self-center"></img>
          <span className="text-2xl font-semibold opacity-50">sneat</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl opacity-60 tracking-wide font-medium">
            Welcome to Sneat! <span className="opacity-100 font-bold">👋</span>
          </span>
          <span className="opacity-60">
            Please sign-in to your account and start the adventure
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mailoruser">Email OR USERNAME</label>
          <input
            type="text"
            name="email"
            id="mailoruser"
            value={signInData.email}
            placeholder="Enter your Email Or username"
            className=" border-2 p-2 rounded-md"
            onChange={changeHandle}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between ">
            <label htmlFor="pass">Password</label>
            <span className="cursor-pointer text-[#696cff] font-normal">
              Forgot Password?
            </span>
          </div>
          <div className="relative">
          <input
            type={showEye?"text":"password"}
            id="pass"
            name="password"
            value={signInData.password}
            placeholder="Enter your Password"
            className="border-2 p-2 w-full rounded-md"
            onChange={changeHandle}
            
          />
          {showEye?<IoEyeOutline className="absolute right-3 top-3 text-[#696cff] cursor-pointer text-xl" onClick={()=>setshowEye(!showEye)}/>:<FaRegEyeSlash className="absolute right-3 top-3 text-[#696cff] cursor-pointer text-xl" onClick={()=>setshowEye(!showEye)}/>}
          </div>
        </div>
        <div className="flex gap-2 font-light">
          <input type="checkbox" id="remember" className="w-4 rounded-md" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button
          className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center "
          onClick={signInHandle}
        >
          {" "}
          Sign In
        </button>
        <div>
          New on our platform?{" "}
          <span className="cursor-pointer text-[#696cff] font-bold">
            <Link to={"/"}>Create an account</Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
