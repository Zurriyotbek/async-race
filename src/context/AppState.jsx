import { useReducer, createContext } from "react";
import { SELECTED_CAR, MESSAGE, LOADING } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

function AppState({ children }) {
  const initialState = {
    isLoading: false,
    selectedCar: {},
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Set a car object to update the car's info
  const handleSelectedCar = (car) => {
    dispatch({
      type: SELECTED_CAR,
      payload: car,
    });
  };

  // Set a car object to update the car's info
  const setLoaderState = (isLoading) => {
    dispatch({
      type: LOADING,
      payload: isLoading,
    });
  };

  const data = {
    ...state,
    handleSelectedCar,
    setLoaderState,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppState;
