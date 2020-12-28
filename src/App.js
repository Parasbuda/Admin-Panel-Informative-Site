import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./Pages/Home"
import Login from "./Pages/Login/Login"
import PageNotFound from "./Pages/PageNotFound/PageNotFound"
import Alert from "./Component/Alert/Alert"
import MainSlider from "./Pages/MainSlider/MainSlider"
import CreateMainSlider from "./Pages/MainSlider/CreateMainSlider"
function App() {
  return (
    <React.Fragment>
      <Alert/>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem("accessToken") ? (
                <Redirect to="/home" />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            exact
            path="/home"
            render={() =>
              localStorage.getItem("accessToken") ? (
                <Dashboard />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route component={PageNotFound} />
        </Switch>
    </React.Fragment>
  );
}


export default  App;

