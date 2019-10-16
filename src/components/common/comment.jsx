import {Comment, Avatar, Form, Button, List, Input} from 'antd';
import moment from 'moment';
import React from "react";
import propTypes from 'prop-types'

const {TextArea} = Input;

// 高阶组件的二次封装
const CommentList = ({comments}) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

// 简单组件
const Editor = ({onChange, onSubmit, submitting, value}) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                评论一下
            </Button>
        </Form.Item>
    </div>
);

export default class Comments extends React.Component {

    static propTypes = {
        key: propTypes.number.isRequired,
        comments: propTypes.array.isRequired,
        addComment: propTypes.func.isRequired
    };

    state = {
        comments: [],
        submitting: false,
        value: '',
    };


    // 提交评论
    handleSubmit = () => {

        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {

            this.props.addComment({
                author: '作者',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: this.state.value,
                datetime: moment().fromNow(),
            });
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: '作者',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments
                ],
            });
        }, 1000);
    };

    // 改变
    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {submitting, value} = this.state;

        const {comments} = this.props;
        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments}/>}
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>
        );
    }
}