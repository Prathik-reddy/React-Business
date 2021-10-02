import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                  </h1>
                    <h1><strong className="text-info">Prathik Reddy</strong></h1>
                  <h2 className="my-3">
                    We are the team of talented developers making awsome
                    websites for you
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.link} className="btn-get-started btn btn-primary">
                      {props.btntext}
                    </NavLink>
                  </div>
                </div>

                <div className="pt-5 col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="img here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
