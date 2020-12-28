import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <React.Fragment>
      <nav
        id="sidebar"
        className="col-md-3 col-lg-2 d-md-block  sidebar  mt-5"
        style={{ overflowY: "auto", listStyleType: "none" }}
      >
        <div>
          <li className="nav-item">
            <a
              className="nav-link"
              href="!#"
              data-toggle="collapse"
              data-target="#dashboard"
            >
              Dashboard
            </a>

            <div
              id="dashboard"
              className="show collapse "
              aria-labelledby="dashboard"
            >
              <ul>
                <li className="nav-item ">
                  <NavLink className=" nav-link " to="/home">
                    dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="!#"
              data-toggle="collapse"
              data-target="#main-slider"
            >
              Main Slider
            </a>

            <div
              id="main-slider"
              className="show collapse "
              aria-labelledby="main-slider"
            >
              <ul>
                <li className="nav-item ">
                  <NavLink className=" nav-link " to="/main-slider">
                    Main Slider
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className=" nav-link " to="/main-slider/create">
                   Create Main Slider
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
         
          {/* Supplier management */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href="!#"
              data-toggle="collapse"
              data-target="#report"
            >
              Financial Report
            </a>

            <div
              id="supplier"
              className="show collapse "
              aria-labelledby="report"
            >
              <ul>
                <li className="nav-item ">
                  <NavLink to="/purchase-report" className=" nav-link ">
                    Purchase Report
                  </NavLink>
                </li>
              </ul>
            </div>
          </li> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
