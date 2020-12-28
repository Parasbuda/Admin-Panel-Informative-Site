import React from "react";
import Header from "../../Dashboard/Header/Header";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
const Dashboard = ({ isAuthenticated }) => {
  // //for redirecting the user to login page if he/she is not authenticated
  // if (!isAuthenticated) {
  //   window.location.replace("/");
  // }
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <nav aria-label="breadcrumb">
                <div className="container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </div>
              </nav>
            <h2>Welcome to my Dashboard</h2>
            
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Dashboard);
