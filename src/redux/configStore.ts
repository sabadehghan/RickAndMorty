import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slice/characterSlice";

export default configureStore({
  reducer: {
    character: characterReducer,
  },
});
