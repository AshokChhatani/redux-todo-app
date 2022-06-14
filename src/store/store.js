import { configureStore } from "@reduxjs/toolkit";
import tasklistSlice from "./tasklistSlice";
import todoSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    tasklist: tasklistSlice,
    todo: todoSlice,
  },
});

export default store;
