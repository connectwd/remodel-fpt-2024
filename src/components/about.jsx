import React from "react";

export const About = (props) => {
  console.log(props)
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-row">
          <div className="about-img-container">
            <img src="img/solar-2344550_1920.jpg" className="img-responsive" alt="" />
            <div className="about-text-container">
            <div className="about-text">
              <div  className="about-title" ><h2>About Us</h2></div>
              <p>{props.data ? props.data["About-Text"] : "loading..."}</p>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
