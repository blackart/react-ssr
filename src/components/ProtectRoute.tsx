import * as React from 'react';
import {Route, Redirect, RouteProps} from "react-router";

class ProtectRoute extends React.Component<RouteProps> {
    render = () => {
        return true ? <Redirect to='/login'/> : <Route {...this.props}/>
    }
}

export default ProtectRoute;