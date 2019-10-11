import React from "react";
import { Route, Switch} from 'react-router-dom'
import MiddleJump from "../components/LoginAndRegister/MiddleJump";
import Home from "../components/home";
import Login from "../components/LoginAndRegister";
import NotFound from "../components/404";

export function PrimaryRoute() {
    return (
        <Switch>
            <Route path={'/'} component={MiddleJump} exact/>
            <Route path={'/home'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    )
}