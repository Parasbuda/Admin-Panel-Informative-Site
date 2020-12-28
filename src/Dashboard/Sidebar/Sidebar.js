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
          {/* Main Slider */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="!#"
              data-toggle="collapse"
              data-target="#mainSlider"
            >
              Main Slider
            </a>

            <div
              id="mainSlider"
              className="show collapse "
              aria-labelledby="mainSlider"
            >
              <ul>
                <li className="nav-item ">
                  <NavLink to="/main-slider" className=" nav-link ">
                    Main Slider
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
         
          {/* Purchase Order management */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href="!#"
              data-toggle="collapse"
              data-target="#purchaseOrder"
            >
              Purchase Order Management
            </a>

            <div
              id="purchaseOrder"
              className="show collapse "
              aria-labelledby="purchaseOrder"
            >
              <ul>
                <li className="nav-item ">
                  <NavLink to="/purchase-order" className=" nav-link ">
                    Purchase Order
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    to="/purchase-order-cancellation"
                    className=" nav-link "
                  >
                    Purchase Order Cancellation
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/purchase-order-approve" className=" nav-link ">
                    Purchase Order Approve
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
