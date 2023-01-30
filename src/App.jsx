import { useReducer, useState, useContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import AppContext from "./context/app-context";
import Garage from "./pages/garage/garage";
import Winners from "./pages/winners/winners";

function App() {
  const { sayMessage, message } = useContext(AppContext);
  const [input, setInput] = useState("");

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/winners" element={<Winners />} />
        <Route path="/" element={<Garage />} />
      </Routes>
    </>
  );
}

export default App;
