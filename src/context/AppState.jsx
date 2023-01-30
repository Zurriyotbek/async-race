import { useReducer, createContext } from "react";
import { MESSAGE } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

function AppState({ children }) {
  const initialState = {
    message: "This is message",
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Say message
  const sayMessage = (msg) => {
    dispatch({
      type: MESSAGE,
      payload: msg,
    });
  };

  return (
    <AppContext.Provider value={{ sayMessage, message: state.message }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
