import React from "react";
import Common from "./Common";
import web from "../src/images/Ashirwad.JPG";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
      />
    </>
  );
};

export default About;
