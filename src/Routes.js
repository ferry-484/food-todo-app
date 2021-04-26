import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Next from "./Components/Next";
import Food from "./Components/Food";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/next"
          component={Next}
          render={(e, props) => <Next {...e} data={props} />}
        />
   
        <Route
          exact={true}
          path="/" // always loads first
          component={Food}
          render={(e, props) => <Food {...e} data={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
