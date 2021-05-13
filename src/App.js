import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import ShopForm from "./components/ShopForm";
import Shops from "./components/Shops";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <Switch>
          <Route path="/shops/form/:id" component={ShopForm} />
          <Route path="/shops/:id" component={Shop} />
          <Route path="/shops" component={Shops} />
          <Redirect from="/" exact to="/shops" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
