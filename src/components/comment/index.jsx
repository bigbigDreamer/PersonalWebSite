import React, {Component} from "react"
import {notification} from 'antd'
import {findAll, insertComment} from "../../api/comment"

import Comments from '../common/comment'

export default class Comment extends Component {

    state = {
        comments: []
    };

    componentDidMount() {
        findAll('comment/findAll')
            .then(data => {
                console.log(data);
                this.setState({
                    comments: data.data.comments
                })
            })
    }

    addComment = (args) => {
        insertComment('comment/insertComment',args)
            .then(data => {
                // console.log(data);
                if (data.data.status === 200) {
                    notification.success({
                        message: '通知',
                        description:
                            '评论成功！',
                    });
                    this.setState({
                        comments: [...this.state.comments,args]
                    })
                }

            });
        console.log(args,45454);
    };

    render() {
        const {comments} = this.state;
        return (
            <div>
                <Comments comments={comments} key={0} addComment={(args) => this.addComment(args)}/>
            </div>
        )
    }
}