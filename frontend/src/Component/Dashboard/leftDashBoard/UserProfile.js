import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { addUserData } from "../../redux/UserSlice";

const UserProfile = () => {
  const userInfo = useSelector((store) => store.user.userData[0]);
  const dispatch = useDispatch();

  const [user, setUser] = useState(userInfo);
  const [isreadOnly, setReadOnly] = useState(false);

  const updateUserInfo = async()=>{
    dispatch(addUserData(user));
    console.log(user);
    const updatedUser = await axios.put("http://localhost:4000/api/v1/updateuser",{...user});
    dispatch(addUserData(updatedUser.data.message));
  }

  const setEditableClick = (e) => {
    e.preventDefault();
    setReadOnly(!isreadOnly);
    if (user == userInfo) {
      !isreadOnly
        ? toast.success("Now user can edit his personal Information")
        : toast.warning("Prevent User From Editing personal information");
    }
    //save user inputed information and storing it in userSlice
    if (e.target.textContent === "Save" && user != userInfo) {
      toast.warning(
        "please note that you make changes in your personal infomartion"
      );
       updateUserInfo();
    }
  };

  const changeHandle = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    }
  }, [userInfo]);

  return user === undefined ? (
    <div className="hidden"></div>
  ) : (
    <div className="flex flex-col gap-5 h-screen">
      <div className="flex w-full gap-8">
        <img
          src={require("../../../images/avatars/6.png")}
          className="w-1/12 rounded-lg"
        />
        <div className="flex flex-col gap-4 ">
          <div className="flex mt-4 gap-2">
            <button className="bg-purple-600 font-medium p-2 border-solid rounded-lg opacity-90 text-white shadow-lg">
              Upload new photo
            </button>
            <button className="border py-1 border-gray-400 rounded-lg px-5 text-gray-400 text-lg">
              Reset
            </button>
          </div>
          <span className="text-gray-400 text-sm">
            Allowed JPG, GIF or PNG. Max size of 800K
          </span>
        </div>
      </div>
      <div className="border bg-gray-300 w-full"></div>
      <form className="flex flex-col gap-4">
        <label htmlFor="name">NAME</label>
        <input
          className="border border-gray-300  hover:border-purple-500 transition duration-300 bg-transparent p-2 rounded-md w-1/2"
          readOnly={!isreadOnly}
          id="name"
          value={user.name}
          onChange={changeHandle}
        />
        <label htmlFor="email">EMAIL</label>
        <input
          className="border border-gray-300  hover:border-purple-500 transition duration-300 bg-transparent p-2 rounded-md w-1/2"
          readOnly={!isreadOnly}
          id="email"
          value={user.email}
          onChange={changeHandle}
        />
        <label htmlFor="phone">PHONE</label>
        <input
          className="border border-gray-300  hover:border-purple-500 transition duration-300 bg-transparent p-2 rounded-md w-1/2"
          readOnly={!isreadOnly}
          id="phone"
          value={user.phone}
          onChange={changeHandle}
        />
        <button
          className="bg-purple-600 text-center font-medium w-1/12 p-1 border-solid rounded-lg opacity-90 text-white shadow-lg"
          onClick={setEditableClick}
        >
          {isreadOnly ? "Save" : "Edit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export { UserProfile };
