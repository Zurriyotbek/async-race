import { MESSAGE } from "./app-actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case MESSAGE:
      return {
        message: action.payload,
      };
    default:
      return {};
  }
};

export default appReducer;
