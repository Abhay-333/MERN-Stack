import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import { ThemeDataContext } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <Navbar />
      <Sections />
      <Footer />
    </>
  );
};

export default App;
