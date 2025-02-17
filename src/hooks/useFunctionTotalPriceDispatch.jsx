import { useContext } from "react";
import { TotalPriceDispatchContext } from "../context/TotalPriceContext";

export const useFunctionTotalPriceDispatch = () => {
  return useContext(TotalPriceDispatchContext);
};
