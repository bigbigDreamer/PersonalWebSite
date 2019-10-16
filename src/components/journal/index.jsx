import React, {Component} from "react"
import {Timeline, Icon} from 'antd'

export default class Journal extends Component {
    render() {
        return (
            <div>
                <Timeline mode="alternate">
                    <Timeline.Item>开始创建个人网站 2019-10-01</Timeline.Item>
                    <Timeline.Item color="green">完善编码与业务逻辑 2019-10-01~10-15</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>
                        利用Mock.js替代数据库与后台，对于前台发送的ajax进行请求拦截，返回请求处理结果，前台对于返回数据进行集中处理 2019-10-01~10-15
                    </Timeline.Item>
                    <Timeline.Item color="red">项目业务逻辑二次检查，对于一些错误警告予以集中处理 2019-10-17</Timeline.Item>
                    <Timeline.Item>项目上线优化，优化体积，优化访问带宽，优化并发请求 2019-10-18</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>
                        Mocha代码测试，断点调试，工具Preference调试代码块，分chunk调试 2019-10-20~10-22
                    </Timeline.Item>
                    <Timeline.Item>
                        云服务器部署 2019-10-23
                    </Timeline.Item>
                    <Timeline.Item>
                        项目文档编撰 2019-10-24
                    </Timeline.Item>
                    <Timeline.Item>
                        线上测试 2019-10-25
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}