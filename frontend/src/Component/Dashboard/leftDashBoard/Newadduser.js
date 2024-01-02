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

  const createUser = async (data) => {
     console.log(data);
    console.log(data);
    const realData = {
      name: data.name,
      email:data.email,
      phone:data.phone,
      dateOfBirth: data.dob,
      gymPlan: data.plan,
    };
    console.log(realData.gymPlan);
    console.log(userInfo.plan);
    try {
      const savedRes = await fetch("http://localhost:4000/api/v1/addtrainee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...realData }),
      });

      if (!savedRes.ok) {
        throw new Error(`error throw with status resonse${savedRes.status}`);
      }

      // console.log("form response   ",savedRes);

      toast.success("User Creates Successfully");
    } catch (err) {
      console.log(err.message);
      toast.error("user Already Exists");
    }
  };

  const clickHandle = (e) => {
    e.preventDefault();
    createUser(userInfo);
    // console.log(userInfo);
  };

  const changeHandle = (event) => {
    const { name, type, value, checked } = event.target;

    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className="flex flex-col gap-4 bg-white rounded-lg w-9/12 p-4 justify-center my-10">
      <div className="flex gap-4">
        <label htmlFor="name" className="my-auto ">
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
          Enter Your phone Number{" "}
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
          Enter the Date of Birth
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
          Enter Your Email{" "}
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

      <select className="w-1/3 p-2" name="plan" onChange={changeHandle}>
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
      <ToastContainer/>
    </form>
  );
};
