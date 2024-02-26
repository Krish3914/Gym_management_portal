import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { apiURL } from "./utils/commonData";
const EnterOtp = () => {
  
  
  const{email} = useParams();
  const navigate = useNavigate();
  const [otp,setotp] = useState();
  const verifyOTP = async()=>{
    console.log("otp we received is ",otp);
    try{
      console.log("email we got is ",email)
      const verifyOtpResult = await axios.post(`${apiURL}verifyotp`, { otp,email });
      if(verifyOtpResult.data.success){
        navigate(`/reset-password/${email}`)
      }
      
    console.log("eeah we verfied the url ",verifyOtpResult);
    } catch(err){
      console.log("shitt we stuckin the error");
      console.log(err.message)
    }
  }
  
  const changeHandle = (e) => {
    const { name, value } = e.target;
  
    setotp((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(()=>{
    toast.success("OTP Sent SuccessFully");
  },[]);

  return (
    <div className="w-full h-screen bg-purple-400 flex items-center justify-center">
      <div className="bg-white w-1/3 flex flex-col items-center gap-6 p-4 shadow-lg rounded-md">
        <div>Verify</div>
        <div>Your Code Was Sent To You Via Mail</div>
        <div className="flex w-full mx-auto gap-4 justify-center ">
          <input
            type="text"
            name="otpf1"
            className="border-2 border-slate-500 py-2 px-1 w-1/6 text-center rounded-lg font-medium text-lg"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            onChange={changeHandle}
          />
          <input
            type="text"
            name="otpf2"
            className="border-2 border-slate-500 py-2 px-1 w-1/6 text-center rounded-lg font-medium text-lg"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            onChange={changeHandle}
          />
          <input
            type="text"
            name="otpf3"
            className="border-2 border-slate-500 py-2 px-1 w-1/6 text-center rounded-lg font-medium text-lg"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            onChange={changeHandle}
          />
          <input
            type="text"
            name="otpf4"
            className="border-2 border-slate-500 py-2 px-1 w-1/6 text-center rounded-lg font-medium text-lg"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            onChange={changeHandle}
          />
        </div>
        

        <button className="bg-[#696cff] py-2 px-4 rounded-lg shadow-lg font-medium text-white" onClick={verifyOTP}>Verify</button>
        <div>
          Didnt Recieve Code <span className="text-[#696cff] cursor-pointer">Sent Again?</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export { EnterOtp };
