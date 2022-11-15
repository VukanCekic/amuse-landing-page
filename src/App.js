import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Newsletter from "./components/NewsLetter";
import Cards from "./components/Cards";

export const App = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Hero></Hero>
      <Info></Info>
      <Cards></Cards>
      <Newsletter></Newsletter>
    </div>
  );
};
export default App;
