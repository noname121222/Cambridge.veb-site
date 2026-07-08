import React from "react";
import { useState } from "react";
import About from "./About";
import Plus from "./Plus";
import Strength from "./Strength";
import Teachers from "./Teachers";
import Students from "./Students";
import Lessons from "./Lessons";
import Location from "./Location";
import Questions from "./Questions";
import Footer from "./Footer";





const Cambridge = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <About />

      <Plus />

      <Strength/>
    
       
      <Teachers/>
      <Students/>
      <Lessons/>
      <Location/>
      <Questions/>
      <Footer/>
      
    </>
  );
};

export default Cambridge;
