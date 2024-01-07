// // tables.js
import { ToastContainer, toast } from "react-toastify";
import { ShimmerTable } from "../leftDashBoard/ShimmerTable";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [clients, setClients] = useState();
  const getClients = async () => {
    try {
      const result = await fetch("http://localhost:4000/api/v1/clients");
      const { message } = await result.json();
      console.log("this is message", message);

      if (!result) {
        throw new Error(`error throw with status resonse`);
      }

      setClients(message);
      console.log("this is Clients", clients);
      toast.success("Fetch The Users Data");
    } catch (err) {
      toast.error("Error Occured while Fetching users data");
      console.log("error found while Fetching");
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return !clients ? (
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
            <tr>
              <td className="py-2 px-4 border-b">{data?.name}</td>
              <td className="py-2 px-4 border-b">{data.dateOfBirth}</td>
              <td className="py-2 px-4 border-b">{data?.phone}</td>
              <td className="py-2 px-4 border-b">{data?.gymPlan}</td>
              <td className="py-2 px-4 border-b">Active</td>
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








