import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Newsletter from "./components/NewsLetter";
import Cards from "./components/Cards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Hero></Hero>
      <Info></Info>
      <Cards></Cards>
      <Newsletter></Newsletter>
      <ToastContainer />
    </div>
  );
};
export default App;
