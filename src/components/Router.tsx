import * as React from 'react';
import {Route, Switch} from "react-router";
import Main from "../pages/Main";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import Admin from "../pages/Admin";
import ProtectRoute from "./ProtectRoute";

const Router: React.FC = () => (
      <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/login' component={Login}/>
          <ProtectRoute path='/admin' component={Admin}/>
          <Route path='/' component={NotFound}/>
      </Switch>
);

export default Router;
