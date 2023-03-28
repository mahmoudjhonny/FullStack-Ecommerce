import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink
            className="navbar-brand"
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "",
              };
            }}
          >
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/shop"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                >
                  shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/signin"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
