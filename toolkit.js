import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("Oncreate store", store.getState());

// subscribe
store.subscribe(() => {
  console.log("State has been changed", store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 2, quantity: 10 }));
store.dispatch(login());
