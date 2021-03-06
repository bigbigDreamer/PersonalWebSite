import React, {Component} from "react"
import {Card, Icon, Avatar, Badge , List} from 'antd';
import './default.less'
import {getArticle, getRecommendData,handleDoLike} from '../../api/home'

const {Meta} = Card;


export default class Default extends Component {

    state = {
        // 文章列表
        articleList: [],
        // 推荐文章列表
        recommendedList: []
    };

    componentDidMount() {
        // 获取所有文章
        getArticle('getArticle')
            .then(data => {
                this.setState({
                    articleList: data.data
                })
            });

        // 获取所有的推荐文章
        getRecommendData('getRecommendData')
            .then(data => {
                this.setState({
                    recommendedList: data.data
                })
            });
    }

    // 获取细节，其实有两种实现方案
    // 一种是：params，刷新不会丢失
    // 另外一种是：query，但是刷新会丢失数据
    // 还有一种方式是通过加入params 进行数据传，但是也会刷新丢失
    getDetails = (key) => {
        console.log(key);
        const {history} = this.props;
        history.push({
            pathname: '/home/article' + key
        })
    };

    /*
     * @params key {Number} 当前文章的id
     * @desc 根据key值去修改对应文章的like
     */
    handleDoLike = (key) => {
        handleDoLike('handleDoLike',{
            key
        })
            .then(data => {
                // console.log(data);
                getArticle('getArticle')
                    .then(data => {
                        this.setState({
                            articleList: data.data
                        })
                    });
            })
    };

    render() {
        const data = this.state.recommendedList;
        const {articleList} = this.state;
        return (
            <div className={'default'}>
                {/* 左侧导航区域 */}
                <div className="leftContent">
                    {
                        articleList.map(item => {
                            return (
                                <Card
                                    key={item.key}
                                    style={{width: "100%", marginBottom: 18}}
                                    cover={
                                        <img
                                            style={{height: 280}}
                                            onClick={() => this.getDetails(item.key)}
                                            alt="coverImg"
                                            src={item.cover}
                                        />
                                    }
                                    actions={[
                                        <Badge count={item.eye}  offset={[15,5]}>
                                            <Icon type="eye" key={'eye'}/>
                                        </Badge>
                                        ,
                                        <Badge count={item.like}  offset={[15,5]}>
                                        <Icon type="like" onClick={() => this.handleDoLike(item.key)}/>
                                        </Badge>,
                                        <Badge count={item.message}  offset={[15,5]}>
                                        <Icon type="message" key={'message'}/>
                                        </Badge>,
                                        <Icon type="edit" key="edit"/>,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar
                                            src="data:image/jpeg;base64,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"/>}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </Card>
                            )
                        })
                    }
                </div>

                {/*右侧Panel区域*/}
                <div className="rightPanel">
                    <Card
                        cover={
                            <img
                                style={{height: 280}}
                                alt="example"
                                src="data:image/jpeg;base64,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"
                            />
                        }

                        actions={[
                            <Icon type="eye" key={'eye'}/>,
                            <Icon type="like"/>,
                            <Icon type="message" key={'message'}/>,
                            <Icon type="edit" key="edit"/>,
                        ]}
                    >

                        {/*  右侧导航区域  */}
                    </Card>
                    <div className={"RecommendedToday"}>
                        <p className="title">
                            <Icon type="like"/> <span>强烈推荐</span>
                        </p>

                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href="https://ant.design">{item.title}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }

}