import React, {Component} from 'react'
import {Row, Col, Input, Tabs, Icon, BackTop} from 'antd';
import './home.less'
import {SecondaryRoute} from '../../router/secondary-route'
import headerImg from '../../assets/images/header.jpg'

const {TabPane} = Tabs;

const {Search} = Input;

export default class Index extends Component {
    state = {};

    handleChangeTab = (key) => {
        const {history} = this.props;
        switch (key) {
            case "1":
                history.push({
                    pathname: '/home/'
                });
                break;
            case "2":
                history.push({
                    pathname: '/home/journal'
                });
                break;
            case "3":
                history.push({
                    pathname: '/home/song'
                });
                break;
            case "4":
                history.push({
                    pathname: '/home/photo'
                });
                break;
            case "5":
                history.push({
                    pathname: '/home/comment'
                });
                break;
            default:
                history.push({
                    pathname: '/home/'
                })
        }
    };

    render() {
        return (
            <div className="home">
                <Row>
                    {/*顶部导航*/}
                    <Col span={24}>
                        <div className="header">
                            <img src={headerImg} alt=""/>
                            <div className="container">
                                <p>Personal WebSite</p>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    style={{width: 400, fontSize: 18, marginTop: 58,marginBottom:18}}
                                    size={'large'}
                                />
                                <br/>
                                <Tabs defaultActiveKey="1" onTabClick={(activeKey) => this.handleChangeTab(activeKey)}>
                                    <TabPane
                                        tab={
                                            <span>
                                              <Icon type="home"/>
                                              主页
                                            </span>
                                        }
                                        key="1"
                                    >
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                              <Icon type="book"/>
                                              时间轴
                                            </span>
                                        }
                                        key="2"
                                    >
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                              <Icon type="sound"/>
                                              音乐
                                            </span>
                                        }
                                        key="3"
                                    >
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                              <Icon type="picture"/>
                                              相册
                                            </span>
                                        }
                                        key="4"
                                    >
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                              <Icon type="message"/>
                                              留言板
                                            </span>
                                        }
                                        key="5"
                                    >
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </Col>
                    {/*主内容区域*/}
                    <Col span={24}>
                        <div className="main">
                            <BackTop/>
                            <SecondaryRoute/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}