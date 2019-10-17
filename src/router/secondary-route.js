import React from "react";
import Defaults from "../components/home/default";
import ArticleDetails from "../components/home/article-details";
import Song from "../components/song"
import Comment from "../components/comment"
import Journal from "../components/journal"
import Photo from "../components/photo"
import {Route} from 'react-router-dom'
import PhotoDetails from "../components/photo/photo-details";

export function SecondaryRoute() {
    return (
        <div>
            <Route path={'/home/'} component={Defaults} exact/>
            <Route path={'/home/article:key'} component={ArticleDetails} />
            <Route path={'/home/journal'} component={Journal}/>
            <Route path={'/home/song'} component={Song}/>
            <Route path={'/home/comment'} component={Comment}/>
            <Route path={'/home/photo'} component={Photo}/>
            <Route path={'/home/photo?key=:key'} component={PhotoDetails}/>
            {/*<Redirect to={'/home'}/>*/}
        </div>
    )
}