import React from "react";
import { Image } from "./image";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Packages</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d}-${i}`} className="col-xs-6 col-md-3">
                  
                  <Image alt="" smallImage="https://futurepowerteam.co.uk/wp-content/uploads/2023/05/bronze-new.png" />
                  <h3>{d["Package-Title"]}</h3>
                <p>{d["Package-Description"]}</p>
                <div dangerouslySetInnerHTML={{__html: d["Package-Features"]}} />
                <div>
                  <span className="pull-left">From <br/>£{d["Package-Price"]}</span>
                  <span>Kwhs per year* <br/>{d["Package-Kwhs"]}</span>
                </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
