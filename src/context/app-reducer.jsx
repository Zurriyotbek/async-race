import { SELECTED_CAR, MESSAGE, LOADING } from "./app-actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case SELECTED_CAR:
      return {
        ...state,
        selectedCar: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
