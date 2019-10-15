import React, {Component} from "react";
import {getDetailsByKey}  from '../../api/home'

export default class ArticleDetails extends Component {

    state = {
        articleData: {}
    };

    componentDidMount() {

        // 根据key获取文章详情
        const {match} = this.props;
        getDetailsByKey('getDetailsByKey',{
            key:match.params.key
        })
            .then(data => {
                this.setState({
                    articleData: data.data.data
                })
            })
    }

    render() {
        const {articleData} = this.state;
        return (
            <div>
                <h1>{
                    articleData.title
                }</h1>

                {/*动态渲染html*/}
                <div dangerouslySetInnerHTML={{__html: articleData.content}}>

                </div>
            </div>
        )
    }
}