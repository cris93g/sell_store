import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Carou from "./components/Carou/Carou";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Carou />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
