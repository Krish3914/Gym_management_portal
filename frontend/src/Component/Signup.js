import { Link, Navigate, useNavigate } from "react-router-dom";
import iconImage from "../images/favicon/favicon.ico";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  // require("dotenv").config();

export const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setsignUpData] = useState({
      uName:"",email:"",password:""
  });
  const emptyInputs = ()=>{

    setsignUpData({
      uName:"",
      email:"",
      password:""
    })
  }

  const createUser = async (data)=>{
    // console.log(data);

    const realData = {
      name : data.uName,
     email : data.email,
     password : data.password,
     phone : 414120123
    }

    try{
      const savedRes = await fetch( 
        "http://localhost:4000/api/v1/signup",
       {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({...realData}),
       }
      );

      if(!savedRes.ok){
        throw new Error(`error throw with status resonse${savedRes.status}`)
      }

    // console.log("form response   ",savedRes);
  
    toast.success("User Creates Successfully");
      emptyInputs();
    }
    catch(err){
      emptyInputs();
      toast.error("user Already Exists");
    }
    
  };

  const changeHandle = (event)=> {
    const {name,type,value,checked} = event.target;
    // console.log(name,type,value,checked);
    setsignUpData((prev)=>({
      ...prev,[name] : value
    }))

    // console.log(signupData.uName,signupData.email); 
  }

  const signupHandle = (e)=>{
    e.preventDefault();
    console.log("clicked on me");
    console.log(`Name: ${signupData.uName} email:  ${signupData.email} password:${signupData.password}`);
    if(!signupData.uName|| !signupData.password){
      toast.warning("Please Fill All the details");
    }
    else{
      createUser(signupData);
    }
  }
  
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <form className="w-3/12 flex flex-col gap-4 rounded-lg bg-white p-4 my-2">
        <div className="flex self-center gap-2 ">
          <img src={iconImage} className="h-10 self-center"></img>
          <span className="text-2xl font-semibold opacity-50">sneat</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl opacity-80 tracking-wide font-medium">
            Adventure starts here 🚀
          </span>
          <span className="opacity-60">
            Make your app management easy and fun!
          </span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">USERNAME</label>
          <input
            type="text"
            id="name"
            name="uName"
            placeholder="Enter your username"
            value={signupData.uName}
            className="border-2 p-2 rounded-md"
            onChange={changeHandle}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            name="email"
            placeholder="Enter your Email"
            value={signupData.email}
            className=" border-2 p-2 rounded-md"
            onChange={changeHandle}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={signupData.password}
            placeholder="Enter your Password"
            className="border-2 p-2 rounded-md"
            onChange={changeHandle}
          />
        </div>
        <div className="flex gap-2 font-light">
          <input type="checkbox" id="policy" className="w-4 rounded-md" />
          <label htmlFor="policy">
            I agree to{" "}
            <span className="cursor-pointer text-[#696cff] font-bold">
              privacy policy & terms
            </span>{" "}
          </label>
        </div>
        <button className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center " onClick={signupHandle}>
          {" "}
          Sign Up
        </button>
        <div>
          Already have an account?{" "}
          <span className="cursor-pointer text-[#696cff] font-bold">
            <Link to={"/login"}>Sign in instead</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
