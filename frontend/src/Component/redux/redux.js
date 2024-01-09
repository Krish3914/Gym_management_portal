import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import clientSlice from "./clientSlice";

const userStore = configureStore({
  reducer: { user: UserSlice, client: clientSlice },
});

export default userStore;
