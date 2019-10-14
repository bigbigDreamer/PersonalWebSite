import React, {Component} from "react";

export default class ArticleDetails extends Component {
    render() {
        const {location, match} = this.props;
        return (
            <div dangerouslySetInnerHTML={{__html: location.query.name}}>

            </div>
        )
    }
}