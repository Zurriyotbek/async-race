import React, { useReducer, useContext } from "react";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => useContext(AuthStateContext);
const useAuthDispatch = () => useContext(AuthDispatchContext);

const LoginButton = () => {
  const dispatch = useAuthDispatch();
  return <button onClick={() => dispatch({ type: "login" })}>Login</button>;
};

const LogoutButton = () => {
  const dispatch = useAuthDispatch();
  return <button onClick={() => dispatch({ type: "logout" })}>Logout</button>;
};

const App = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <AuthProvider>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </AuthProvider>
  );
};
