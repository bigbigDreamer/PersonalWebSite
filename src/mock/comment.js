import Mock from 'mockjs'
import commentList from '../_data/comment/comments'

const comments = commentList;

// 遍历所有的评论
Mock.mock(/http:\/\/com\.cn\/comment\/findAll.*/,"get", _ => ({
    status: 200,
    comments
}));

// 插入评论
Mock.mock(/http:\/\/com\.cn\/comment\/insertComment.*/,"post", options => {
    const data = JSON.parse(options.body);
    comments.push(data);
    return {
        status:200,
        res:'success'
    }
});