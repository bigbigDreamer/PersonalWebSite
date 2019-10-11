import React from "react";
import Defaults from "../components/home/default";
import {Test} from "../components/test/test";
import { Route} from 'react-router-dom'

export function SecondaryRoute() {
    return (
        <div>
            <Route path={'/home/'} component={Defaults}/>
            <Route path={'/home/personal'} component={Test}/>
            {/*<Redirect to={'/home'}/>*/}
        </div>
    )
}