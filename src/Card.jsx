import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Ashirwad.JPG";
import Common from "./Common";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10   mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some more quick example text to build on the card title and make
              up the bulk of the card's content.
            </p>
            <NavLink to="" className="btn-medium btn-outline">
              Learn More
            </NavLink>
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

export default Card;
