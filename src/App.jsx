import { useReducer, useState, useContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Loader from "./components/loader/loader";
import NavBar from "./components/navBar/navBar";
import AppContext from "./context/app-context";
import Garage from "./pages/garage/garage";
import Winners from "./pages/winners/winners";

function App() {
  const { sayMessage, message, isLoading } = useContext(AppContext);
  const [input, setInput] = useState("");

  return (
    <>
      {isLoading ? <Loader /> : null}
      <NavBar />
      <Routes>
        <Route path="/winners" element={<Winners />} />
        <Route path="/" element={<Garage />} />
      </Routes>
    </>
  );
}

export default App;
