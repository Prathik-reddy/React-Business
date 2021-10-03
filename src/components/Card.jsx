import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top card-img" src={props.imgSrc} alt="img here" />
          <div className="card-body">
            <h4 className="card-title ">{props.title}</h4>
            <p className="card-text">
              {props.desc}
            </p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
