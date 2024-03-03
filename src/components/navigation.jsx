import React from "react";

export const Navigation = (props) => {

  return (
    <nav
      id="menu"
      className="navbar navbar-transparent navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
              id="burger-menu"
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span id="icon-bar" className="icon-bar icon-bar-white"></span>
              <span id="icon-bar" className="icon-bar icon-bar-white"></span>
              <span id="icon-bar" className="icon-bar icon-bar-white"></span>
            </button>
          
          <a className="navbar-brand" href="#page-top">
            <img
              alt="logo"
              src="https://futurepowerteam.co.uk/wp-content/uploads/2023/05/FPT_logo.png"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#features" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                Packages
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                Process
              </a>
            </li>
            {/* <li>
              <a href="/#process" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                faqs
              </a>
            </li> */}
            <li>
              <a href="/#portfolio" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                More Info
              </a>
            </li>
            {/* <li>
              <a href="/#team" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                Pay Now
              </a>
            </li> */}
            <li>
              <a href="/#contact" className="page-scroll" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
