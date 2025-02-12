import { legacy_createStore } from "redux";

// reducer
const cartReducer = (state = { cart: [{ id: 1, quantity: 20 }] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cartReducer);
console.log(store.getState());

// subscribe
store.subscribe(() => {
  console.log("State has been changed", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, quantity: 10 } };
store.dispatch(action1);
