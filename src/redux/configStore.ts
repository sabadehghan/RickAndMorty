import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slice/character";

export default configureStore({
  reducer: {
    character: characterReducer,
  },
});
