import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Ashirwad.JPG";
import Card from "./Card";
import Common from "./Common";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gx-5">
              {Sdata.map((currval, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={currval.imgsrc}
                    title={currval.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Common
        name="Here are our services"
        imgsrc={web}
        visit="/"
        btname="Services"
      /> */}
    </>
  );
};

export default Services;
