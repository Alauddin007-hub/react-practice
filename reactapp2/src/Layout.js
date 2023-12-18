import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p>
              <a href="#">Link</a>
            </p>
            <p>
              <a href="#">Link</a>
            </p>
            <p>
              <a href="#">Link</a>
            </p>
          </div>
          <Outlet />
          <div className="col-sm-2 sidenav">
            <div className="well">
              <p>ADS</p>
            </div>
            <div className="well">
              <p>ADS</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center">
        <p>Footer Text</p>
      </footer>
    </>
  );
}
