import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("Oncreate store", store.getState());

// subscribe
store.subscribe(() => {
  console.log("State has been changed", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, quantity: 10 }));
