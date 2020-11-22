import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/about.css";

import virus from "./res/img/coronavirus.png";
const About = () => {
  return(
    <>
    <div className="wrapper-about">
      <section className="section-one">  
        <div className="row">
          <div className="col-lg-6 col-12">
          <div className="text ml-lg-5 pl-lg-5">
            <p className="header-text ">FRISK</p>
            <h1>Wash Your Hands Frequently</h1>
            <p className="col-10">Stay Aware of the Coronavirus, Stay Home & Safe For You and Others, And Maintain All the Safety Measures by Medical Professionals to Defeat It!</p>
              <div className="buttons">
                <NavLink exact className="nav-link" to="/symptoms">
                <button className="btn_hire_me">Know Symptoms</button>
                </NavLink> 
                <NavLink exact className="nav-link" to="/contact">
                  <button className=" ml-4 btn_hire_me">Contact</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="animation">
              <img src={virus} className="big virus-anti" alt=""/>
              <img src={virus} className="med virus" alt=""/>
              <img src={virus} className="sm virus" alt=""/>
            </div>
          </div>
        </div>

      </section>      
    <div className="row">
      <div className="col-lg-6 col-12">
       
      </div>
      <div className="col-lg-6 col-12">
      
    </div>
    </div>
    </div>
    </>
  );
};

export default About;
