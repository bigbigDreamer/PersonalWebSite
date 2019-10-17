import React, {Component} from "react";
import {getDetailsByKey, changeArticleEye} from '../../api/home'
import Comments from '../common/comment'

export default class ArticleDetails extends Component {

    state = {
        articleData: {}
    };

    componentDidMount() {

        const {match} = this.props;

        // 根据key获取文章详情
        getDetailsByKey('getDetailsByKey', {
            key: match.params.key
        })
            .then(data => {
                this.setState({
                    articleData: data.data.data
                })
            });

        // 根据key修改文章的浏览次数
        changeArticleEye('changeArticleEye', {
            key: match.params.key
        })
            .then(data => {

            });
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
                <br/>

                {/*评论部分*/}
                <Comments key={this.props.match.params.key} comments={[]} />
            </div>
        )
    }
}