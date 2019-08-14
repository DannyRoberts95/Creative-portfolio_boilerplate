import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className="uk-navbar-container uk-margin-medium-top uk-margin-large-bottom uk-background-default uk-navbar-transparent"
      uk-navbar="mode: click"
    >
      <div className="uk-navbar-left ">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/landing">
              <span href="" className="uk-icon-button" uk-icon="home" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-center ">
        <ul className="uk-navbar-nav" />
      </div>

      <div className="uk-navbar-right ">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/gallery">
              <span href="" className="uk-icon-button" uk-icon="grid" />
            </Link>
          </li>
          <li>
            <Link to="/info">
              <span href="" className="uk-icon-button" uk-icon="info" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
