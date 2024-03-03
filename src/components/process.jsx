import React from "react";

export const Process = (props) => {
  return (
    <div id="process" className="text-center">
      <div className="process-container">
        <div className="section-title">
          <h2>How do we install your solar panels?</h2>
        </div>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className={`process${i} process-data`}>
                <i className={`process-step-number`}>{`0${i+1}`}</i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        <div className="process-img">
        </div>
      </div>
    </div>
  );
};
