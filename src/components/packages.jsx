import React from "react";

export const Features = (props) => {
  return (
    <div id="packages" className="text-center">
      <div className="container package-container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Packages</h2>
        </div>
        <div className="row package-wrapper">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d}-${i}`} className="package-card">
                  <div className="package-image-wrapper">
                    <img
                      className="package-image"
                      alt=""
                      src="https://futurepowerteam.co.uk/wp-content/uploads/2023/05/bronze-new.png"
                    />
                  </div>
                  <div className="package-title">
                    <h3>{d["Package-Title"]}</h3>
                  </div>
                  <div className="package-description">
                    <p>{d["Package-Description"]}</p>
                  </div>
                  <div
                    className="package-features"
                    dangerouslySetInnerHTML={{ __html: d["Package-Features"] }}
                  />
                  <div className="package-footer">
                    <span className="pull-left">
                      From <br />£{d["Package-Price"]}
                    </span>
                    <span className="pull-right">
                      Kwhs per year* <br />
                      {d["Package-Kwhs"]}
                    </span>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
