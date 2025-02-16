import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

// store
const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

console.log("Oncreate store", store.getState());

// subscribe
store.subscribe(() => {
  console.log("State has been changed", store.getState());
});

export default store;
