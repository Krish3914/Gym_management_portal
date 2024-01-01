import {  useState } from "react";
import { CiSearch } from "react-icons/ci";
import {Template} from "../../Component/Template";

export const Navbar = ()=>{

  const[showTemplate,setshowTemplate] = useState(false);
    return(
        <div className="flex items-center justify-between bg-white m-2 rounded-lg shadow-xl">
          <div className="flex items-center gap-2">
            <CiSearch className="scale-125 stroke-1 ml-4" />
            <input className="p-2" placeholder="Search.."/>
          </div>
          <img
            src={require("../../images/avatars/6.png") }
            className="w-16 rounded-full p-2 relative cursor-pointer" onClick={()=>setshowTemplate(!showTemplate)}
          />
          {
            (showTemplate)?(<Template/>):<div className="hidden"></div>
          }
        </div>
    )
}