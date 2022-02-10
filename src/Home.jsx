import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Ashirwad.JPG";
import Common from "./Common";

const Home = () => {
  return (
    <>


    
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
