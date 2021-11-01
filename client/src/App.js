import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { loadUser } from "./actions/authAction";

import { Login, Home, Root, Header, Countries, Country } from "./components";
import store from "./_helpers/store";

const token = localStorage.getItem("jwtToken");

function App() {
  useEffect(() => {
    if (token) store.dispatch(loadUser(token));
  }, []);

  if (!token)
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" children={<Login />}></Redirect>
          <Route exact path="/login" children={<Login />}></Route>
        </Switch>
      </Router>
    );
  else {
    return (
      <Router>
        <Switch>
          <Fragment>
            <Header />
            <Redirect exact from="/" to="/home" children={<Home />}></Redirect>
            <Route exact path="/home" children={<Home />}></Route>
            <Route exact path="/slotmachine" children={<Root />}></Route>
            <Route exact path="/countries" children={<Countries />}></Route>
            <Route exact path="/country/search" children={<Country />}></Route>
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
