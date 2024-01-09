import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newadduser = () => {
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    dob: "",
    plan: "",
    phone: undefined,
  });

  const addTraineeurl = "http://localhost:4000/api/v1/addtrainee";

  const createUser = async (data) => {
    const realData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dob,
      gymPlan: data.plan,
    };
    try {
      console.log(realData);
      const savedRes = await axios.post(addTraineeurl, { ...realData });
      console.log(savedRes);
      if (savedRes.status !== 200) {
        throw new Error(`Error with status response: ${savedRes.status}`);
      }

      toast.success("User Creates Successfully");
    } catch (err) {
      console.log(err);
      toast.error("User Already Exists");
    }
  };

  const clickHandle = (e) => {
    e.preventDefault();
    createUser(userInfo);
  };

  const changeHandle = (event) => {
    const { name, value } = event.target;

    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-4 bg-white rounded-lg w-9/12 p-4 justify-center my-10">
      <div className="flex gap-4">
        <label htmlFor="name" className="my-auto">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="rounded p-2 w-7/12 border-2"
          onChange={changeHandle}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="phone" className="my-auto">
          Contact Number
        </label>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="1201402"
          className="rounded p-2 w-7/12 border-2"
          onChange={changeHandle}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="DOB" className="my-auto">
          Date of Birth
        </label>
        <input
          id="DOB"
          name="dob"
          type="date"
          placeholder="Date of birth"
          className="rounded p-2 w-7/12 border-2"
          onChange={changeHandle}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="email" className="my-auto">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="abc@gmail.com"
          className="rounded p-2 w-7/12 border-2"
          onChange={changeHandle}
        />
      </div>

      <label htmlFor="gymplan">Select Gym Plan</label>
      <select
        className="w-1/3 p-2"
        name="plan"
        id="gymplan"
        onChange={changeHandle}
      >
        <option value={"month"}>month</option>
        <option value={"three months"}>three months</option>
        <option value={"six months"}>six months</option>
        <option value={"one year"}>one year</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 p-1 rounded w-1/12 text-white shadow-lg"
        onClick={clickHandle}
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};
