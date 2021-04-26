import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/user"    
          component={User}
          render={(e, props) => <User {...e} data={props} />}
        />
   
   
        <Route
          exact={true}
          path="/" // always loads first
          component={Home}
          render={(e, props) => <Home {...e} data={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
