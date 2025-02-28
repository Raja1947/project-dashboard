import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar setSearchTerm={setSearchTerm}/>
      <Outlet context={{searchTerm}}/>
      <Footer />
    </>
  );
}

export default App;
