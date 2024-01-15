import { useNavigate } from "react-router-dom"

export const SalesCard = ()=>{
    const navigate = useNavigate();
    return(
       <div>
         <button className="bg-purple-400 text-white py-1 px-4 rounded-lg font-medium shadow-lg hover:bg-purple-500 duration-500" onClick={()=>navigate(-1)}>Previous</button>
         <h1 className="text-center">Alerts</h1>
       </div>
    )
}