import React, {Component} from "react"
import {Card, Icon, Avatar, BackTop} from 'antd';
import './default.less'
const { Meta } = Card;


export default class Default extends Component {
    render() {
        return (
            <div className={'default'}>
                <BackTop />
                {/* 左侧导航区域 */}
                <div className="leftContent">
                    <Card
                        style={{ width: "100%" }}
                        cover={
                            <img
                                style={{height:280}}
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <Icon type="eye" key={'eye'}/>,
                            <Icon type="like" />,
                            <Icon type="message" key={'message'}/>,
                            <Icon type="edit" key="edit" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>

                {/*右侧Panel区域*/}
                <div className="rightPanel">

                </div>
            </div>
        )
    }
}