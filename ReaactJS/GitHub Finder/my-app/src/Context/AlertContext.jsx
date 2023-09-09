import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertConetxt = createContext();

//Provider
export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //setting the Alrert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000
    );
  };

  return (
    <AlertConetxt.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertConetxt.Provider>
  );
};

export default AlertConetxt;
