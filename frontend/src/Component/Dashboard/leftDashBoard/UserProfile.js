import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { addUserData } from "../../redux/UserSlice";
import { apiURL } from "../../utils/commonData";

const UserProfile = () => {
  const userInfo = useSelector((store) => store.user.userData);
  // console.log("this is user info fetched from user store", userInfo);
  const dispatch = useDispatch();
  
  const [user, setUser] = useState(userInfo);
  const photo = !user?.photo?`https://ui-avatars.com/api/?name=${user?.name}`:user?.photo;
  dispatch(addUserData(user));
  const [isreadOnly, setReadOnly] = useState(false);
  const [selectImage, setSelectImage] = useState(undefined);

  const updateUserInfo = async () => {
    // console.log("calling updateUserInfo");
    dispatch(addUserData(user));
    // console.log("user is ",user);
    try{
      const updatedUser = await axios.put(
        `${apiURL}updateuser`,
        { ...user }
      );
      dispatch(addUserData(updatedUser.data.message));
      // console.log("update the name ");
    } catch(err){
      console.error("stuck in error ",err.message);
    }
  };

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

  const changeImageHandle = (e) => {
    setSelectImage(e.target.files[0]);
  };

  const uploadImage = async (e) => {

    if (!selectImage) {
      toast.error("Please select the image");
      return;
    }

    const formData = new FormData();
    formData.append("file",selectImage);
    formData.append("name",selectImage.name);
    formData.append("email",userInfo.email);

    const imageUploadResult = await axios.put(
      `${apiURL}upload-image`,
      formData
    );
    // console.log("the upload image o/p we recived ", imageUploadResult);
  };
  return user === undefined ? (
    <div className="">we will appear soon</div>
  ) : (
    <div className="flex flex-col gap-5 h-screen">
      <div className="flex w-full gap-8">
        <img
          src={photo}
          className="w-1/12 rounded-full"
        />
        <div className="flex flex-col gap-4 ">
          <div className="flex mt-4 gap-2 items-center">
            <input
              className="appearance-none border bg-purple-200 border-purple-300 py-2 px-4 w-1/2  rounded focus:outline-none focus:border-blue-500"
              type="file"
              name="imagefile"
              accept="image/png, image/jpeg"
              onChange={changeImageHandle}
            />
            <button
              className="border py-1 border-gray-400 rounded-lg px-5 text-gray-400 hover:bg-purple-300 hover:text-white duration-500"
              onClick={uploadImage}
            >
              Update image
            </button>
          </div>
          <span className="text-gray-400 text-sm">
            Allowed image,png,image,jpeg. Max size of 800K
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
