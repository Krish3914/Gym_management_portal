// show table will rendered after search in the table

import { ToastContainer, toast } from "react-toastify";
import { ShimmerTable } from "../leftDashBoard/ShimmerTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "../../redux/clientSlice";
import { BsThreeDotsVertical } from "react-icons/bs";

const Table = () => {
  const selector = useSelector((store) => store.client.client);
  const ownerId = useSelector((store) => store.user.userData?._id);
  const dispatch = useDispatch();
  // console.log(ownerId);
  console.log("this is client data", selector);
  const clients = selector;

  const [userData, setUserdata] = useState(clients);
  const [isReadonly, setisReadonly] = useState(true);
  const getClients = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/api/v1/clients/${ownerId}`,
        {
          params: {
            ownerId: ownerId,
          },
        }
      );
      const { message } = result.data;
      console.log("we will pass above data into our store", message);
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
    let updatedClients = [...clients];
    console.log("this is user before delete ",updatedClients)
    const updatedClientsAfterDelete = updatedClients.filter((_, i) => i !== index);
    const id = updatedClients[index]._id; // Remove the client at the specified index
    try {
      const deleteClient = await axios.delete(
        `http://localhost:4000/api/v1/deleteclient/${id}`
      );
       // Update Redux store
       
    dispatch(addClient(updatedClientsAfterDelete));
    console.log("this is user after delete ",updatedClientsAfterDelete);
    setUserdata(updatedClientsAfterDelete);
    toast.success("User deleted successfully");
    } catch (err) {
      return console.log(err.message);
    }

  };

  const handleInputChange = (index, key, value) => {
    setUserdata((prevUserData) => {
      return prevUserData.map((data, i) => {
        if (i === index) {
          // Create a new object with the updated value
          return { ...data, [key]: value };
        }
        return data;
      });
    });
    console.log("this is user after entire cahneg in state", userData);
  };

  const handleSave = async (index) => {
    setisReadonly(!isReadonly);
    console.log("this is use data from state", userData[index]);
    const { _id, name, dateOfBirth, email, gymPlan, phone } = userData[index];
    dispatch(addClient(userData));
    console.log("this is use data from redux", selector);
    try {
      const updateClient = await axios.put(
        `http://localhost:4000/api/v1/updateclient`,
        { _id, name, dateOfBirth, email, gymPlan, phone }
      );
      console.log(updateClient);
    } catch (err) {
      console.log(err.message);
    }
  };



  useEffect(() => {
    getClients();
  }, []);

  return selector.length === 0 ? (
    <ShimmerTable />
  ) : (
    <div>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">MemberShip Plan</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selector.map((data, index) => {
            return (
              <tr className="text-center my-10 group" key={index}>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={userData[index]?.name}
                    className="text-center w-full"
                    readOnly={isReadonly}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={data?.dateOfBirth}
                    className="text-center w-full"
                    readOnly={isReadonly}
                    onChange={(e) =>
                      handleInputChange(index, "dateOfBirth", e.target.value)
                    }
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="number"
                    value={data?.phone}
                    className="text-center w-full"
                    readOnly={isReadonly}
                    onChange={(e) =>
                      handleInputChange(index, "phone", e.target.value)
                    }
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={data?.gymPlan?data.gymPlan:data.plan}
                    className="text-center w-full"
                    readOnly
                  />
                </td>
                <td className="py-2 px-4 border-b text-green-600">Active</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center justify-center space-x-2">
                    <BsThreeDotsVertical className="cursor-pointer" />
                    <div className="group relative">
                      <div className="hidden group-hover:block absolute top-0 right-0 bg-white p-2 shadow-lg">
                        <span
                          className="hover:scale-110 duration-500 hover:shadow-xl cursor-pointer"
                          onClick={() => handleDeleteUser(index)}
                        >
                          Delete
                        </span>
                        <div
                          className="text-center cursor-pointer hover:scale-105 duration-700"
                          onClick={() => handleSave(index)}
                        >
                          {isReadonly ? "Edit" : "Save"}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Table }; // Named export of the Tables component
