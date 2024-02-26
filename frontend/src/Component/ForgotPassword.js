import axios from "axios";
import iconImage from "../images/favicon/favicon.ico";
import { Link, useNavigate } from "react-router-dom";
import isValidEmail from "./utils/validEmail";
import { useState } from "react";
import {Spinner} from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import { apiURL } from "./utils/commonData";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const[loader,setLoader] = useState(false);
  const[email,setEmail] = useState(null);
  const sendOtp = async()=>{
    try{
      if(!isValidEmail(email))
        return toast.warning("Email is not valid")

      // sending otp request to backend
      setLoader(true);
      const result = await axios.post(`${apiURL}send-otp`,{email});
      // console.log("we got the result ",result);
      setLoader(false);
      if(result.data.message){
        navigate(`/enterotp/${email}`);

      }


    } catch(err){
      setLoader(false);
      toast.error("User Not Exists");
      console.log(err.message);
    }
  }
  const handleMailChange = (e)=>{ setEmail(e.target.value);}

  return loader?<Spinner/>:(
    <div className="flex h-screen justify-center items-center bg-slate-100 relative">
      <button
        className="bg-[#696cff] w-1/12 absolute left-8 top-10 text-white py-1 px-4 rounded-lg font-medium shadow-lg hover:bg-[#700cff] duration-500"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
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
          <input type="text" id="email" placeholder="Enter Your Email" className="p-2  rounded-md border-2" value={email} onChange={handleMailChange}/>
          <button className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center " onClick={sendOtp}>Send OTP to registered email ID</button>
          <Link to={"/login"} className="mx-auto">

          </Link>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
