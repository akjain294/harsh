import { createContext, useState } from "react";
import React from "react";
export const MyContext = createContext();

function AppContext({ children }) {
  const [meals, setMeals] = useState([]);
  return (
    <MyContext.Provider value={{ meals, setMeals }}>
      {children}
    </MyContext.Provider>
  );
}

export default AppContext;
