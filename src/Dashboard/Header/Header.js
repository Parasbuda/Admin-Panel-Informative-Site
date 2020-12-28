import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = ({setSearch}) => {
 

  //method to search

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  //Method which hanlde the logout of the user
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.replace("/");
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/home">
          Informative Site
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="#" onClick={handleLogOut}>
              Sign out
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
