import React from "react";
import {Link} from "react-router-dom"
import error from "../../assets/page/pagenotfound.svg";
const PageNotFound = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={error} alt="pagenotfound" className="img-fluid" />
      </div>
      <div className="text-container text-center">
        <h5 className="text-muted">
          Please Enter the Valid Url. Click to Visit
          <span>
            <Link to="/home"> Homepage</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default PageNotFound;
