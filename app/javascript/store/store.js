import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetingReducer.js";

const store = configureStore({
  reducer: {
    greetingStore: greetingReducer,
  },
});

export default store;
