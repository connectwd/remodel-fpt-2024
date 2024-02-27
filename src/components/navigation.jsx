import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top .bg-transparent">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img alt="logo" src="https://futurepowerteam.co.uk/wp-content/uploads/2023/05/FPT_logo.png" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Packages
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Process
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                faqs
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Future Blogs
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Pay Now
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
