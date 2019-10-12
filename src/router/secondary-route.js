import React from "react";
import Defaults from "../components/home/default";
import Song from "../components/song"
import Comment from "../components/comment"
import Journal from "../components/journal"
import Photo from "../components/photo"
import {Route} from 'react-router-dom'

export function SecondaryRoute() {
    return (
        <div>
            <Route path={'/home/'} component={Defaults} exact/>
            <Route path={'/home/journal'} component={Journal}/>
            <Route path={'/home/song'} component={Song}/>
            <Route path={'/home/comment'} component={Comment}/>
            <Route path={'/home/photo'} component={Photo}/>
            {/*<Redirect to={'/home'}/>*/}
        </div>
    )
}