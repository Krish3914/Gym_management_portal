import { Link } from "react-router-dom";
import iconImage from '../images/favicon/favicon.ico'; 
import { useState } from "react";

export const Login = () => {
  const [singnUpData, setsignUpData] = useState({
    email:"",password:""
});

const changeHandle = (event)=> {
  const {name,type,value,checked} = event.target;
  // console.log(name,type,value,checked);
  setsignUpData((prev)=>({
    ...prev,[name] : value
  }))

  // console.log(singnUpData.uName,singnUpData.email); 
}

const signInHandle = (e)=>{
  e.preventDefault();
  console.log(`email:  ${singnUpData.email} password:${singnUpData.password}`);
}
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-3/12 flex flex-col gap-5 rounded-lg bg-white p-5 my-2 relative">
        <div className="flex self-center gap-2 ">
          <img src={iconImage} className="h-10 self-center" ></img>
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
            value={singnUpData.email}
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
          <input
            type="password"
            id="pass"
            name="password"
            value={singnUpData.password}
            placeholder="Enter your Password"
            className="border-2 p-2 rounded-md"
            onChange={changeHandle}
          />
        </div>
        <div className="flex gap-2 font-light">
          <input type="checkbox" id="remember" className="w-4 rounded-md" />
          <label htmlFor="remember">remember Me</label>
        </div>
        <button className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center " onClick={signInHandle}>
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
    </div>
  );
};
