// // tables.js
import { ToastContainer, toast } from "react-toastify";
import { ShimmerTable } from "../leftDashBoard/ShimmerTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "../../redux/clientSlice";
import { MdDelete } from "react-icons/md";

const Table = () => {
  const selector = useSelector((store) => store.client.client);
  const ownerId = useSelector((store) => store.user.userData[0]._id);
  const dispatch = useDispatch();
  console.log(ownerId);

  const clients = selector[selector.length - 1];
  console.log(selector);
  const getClients = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/api/v1/clients/${ownerId}`, {
        params: {
          ownerId: ownerId,
        },
      });
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

  const handleDeleteUser = async (index) => {
    const updatedClients = [...clients];
    const deletedClient = updatedClients.splice(index, 1)[0];
    const id = deletedClient._id; // Remove the client at the specified index
    console.log(id);
    try {
      const deleteClient = await axios.delete(
        `http://localhost:4000/api/v1/deleteclient/${id}`
      );
      console.log(deleteClient);
    } catch (err) {
      console.log(err.message);
    }

    // Update Redux store
    dispatch(addClient(updatedClients));

    toast.success("User deleted successfully");
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
          {clients.map((data, index) => {
            return (
              <tr className="text-center my-10 " key={index}>
                <td className="py-2 px-4 border-b ">{data?.name}</td>
                <td className="py-2 px-4 border-b ">
                  {/* {data.dateOfBirth != 0
                    ? data.dateOfBirth.slice(0, 10) */}
                  {data.dateOfBirth}
                </td>
                <td className="py-2 px-4 border-b ">{data?.phone}</td>
                <td className="py-2 px-4 border-b ">{data?.gymPlan}</td>
                <td className="py-1 px-2 border-b text-green-600 bg-green-50 rounded-2xl">
                  Active
                </td>
                <td>
                  <MdDelete
                    className="opacity-60 hover:scale-110 text-center duration-500 hover:shadow-xl cursor-pointer"
                    onClick={() => handleDeleteUser(index)}
                  />
                </td>{" "}
              </tr>
            );
          })}

          {/* Add more rows as needed */}
        </tbody>
        <ToastContainer />
      </table>
    </div>
  );
};

export { Table }; // Named export of the Tables component
