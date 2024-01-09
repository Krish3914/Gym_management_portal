// // tables.js
import { ToastContainer, toast } from "react-toastify";
import { ShimmerTable } from "../leftDashBoard/ShimmerTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addClient} from "../../redux/clientSlice"
import clientSlice from "../../redux/clientSlice";

const Table = () => {
  const selector = useSelector((state)=>state.client.client);
  
  const dispatch = useDispatch();

  const clients = selector[selector.length-1];

  const getClients = async () => {
    try {
      const result = await axios.get("http://localhost:4000/api/v1/clients");
      const { message } = result.data;
      dispatch(addClient(message));
      
      if (!result) {
        throw new Error(`error throw with status resonse`);
      }
      toast.success("Fetch The Users Data");
    } catch (err) {
      toast.error("Error Occured while Fetching users data");
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return selector.length == 0 ? (
    <ShimmerTable />
  ) : (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">MemberShip Plan</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
       <tbody>
          {/* Add table rows and data here */}
          {clients.map((data) => {
           return <tr className="text-center my-10 ">
              <td className="py-2 px-4 border-b ">{data?.name}</td>
              <td className="py-2 px-4 border-b ">{data.dateOfBirth}</td>
              <td className="py-2 px-4 border-b ">{data?.phone}</td>
              <td className="py-2 px-4 border-b ">{data?.gymPlan}</td>
              <td className="py-1 px-2 border-b text-green-600 bg-green-50 rounded-2xl">Active</td>
            </tr>
          })}

          {/* Add more rows as needed */}
        </tbody>
        <ToastContainer />
      </table>
    </div>
  );
};

export { Table }; // Named export of the Tables component








