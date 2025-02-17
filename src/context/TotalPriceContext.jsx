/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// storing state
const TotalPriceContext = createContext();

// stroring actions
const TotalPriceDispatchContext = createContext();

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL_PRICE":
      return {
        total: action.payload.total,
      };
    default:
      throw Error("Unknown action", action.type);
  }
};

export const TotalPriceProvider = (props) => {
  const { children } = props;
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, {
    total: 0,
  });

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export { TotalPriceContext, TotalPriceDispatchContext };
