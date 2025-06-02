import { createContext } from "react";

export const dishElementContext = createContext();

const DishElementReducer = (current, action) => {
  switch (action.type) {
    case "set":
      return action.payload;
  }
  return current;
};

export default DishElementReducer;
