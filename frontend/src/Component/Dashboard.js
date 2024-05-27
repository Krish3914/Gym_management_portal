import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {apiURL} from "./utils/commonData"
import { Footer } from "./Footer";
import { makeInvisible, updateVisibility } from "./redux/TemplateSlice";

export const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const checkValidity = async () => {
    const sessionStorageToken = sessionStorage.getItem('token');
    try {
      const result = await axios.get(`${apiURL}dashboard`,{ headers: {
        Authorization: `Bearer ${sessionStorageToken}`,
      },});
     
      // console.log(result);
      // console.log("this is userRedux ",userRedux);
    } catch (err) {
      console.log(err.message);
      toast.warning(err.message);
      navigate("/login");
    }
  };
  useEffect(() => {
    checkValidity();
    return ()=>{
     toast.dismiss();
    }
  }, []);

  return (
    <div
      className="flex bg-slate-100"
      onClick={() => dispatch(makeInvisible(false))}
    >
      <div className="w-2/12 hidden lg:block fixed">
        <LeftDashboard />
      </div>
      <div className=" lg:w-10/12 mx-auto overflow-auto p-10 ml-64">
        <Searchbar />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};
