import { createContext, useReducer } from "react";
import axios from "axios";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/professionals");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContextGlobal.Provider value={{ state, changeTheme, fetchData }}>
      {children}
    </ContextGlobal.Provider>
  );
};