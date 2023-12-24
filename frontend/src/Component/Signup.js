import { Link } from "react-router-dom";
import iconImage from '../images/favicon/favicon.ico'; 

export const Signup = () => {
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <form className="w-3/12 flex flex-col gap-4 rounded-lg bg-white p-4 my-2">
        <div className="flex self-center gap-2 ">
          <img src={iconImage} className="h-10 self-center"></img>
          <span className="text-2xl font-semibold opacity-50">sneat</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl opacity-80 tracking-wide font-medium">Adventure starts here 🚀</span>
          <span className="opacity-60"> 
            Make your app management easy and fun!
          </span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">USERNAME</label>
          <input type="text" id="name" placeholder="Enter your username" className="border-2 p-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" placeholder="Enter your Email" className=" border-2 p-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" placeholder="Enter your Password" className="border-2 p-2 rounded-md" />
        </div>
        <div className="flex gap-2 font-light">
          <input type="checkbox" id="policy" className="w-4 rounded-md" />
          <label htmlFor="policy">
            I agree to <span className="cursor-pointer text-[#696cff] font-bold">privacy policy & terms</span>{" "}
          </label>
        </div>
        <button className="bg-[#696cff] shadow-lg text-white p-2 rounded-lg font-bold text-center "> Sign Up</button>
        <div>
          Already have an account? <span className="cursor-pointer text-[#696cff] font-bold"><Link to={"/login"}>Sign in instead</Link></span>
        </div>
      </form>
    </div>
  );
};
