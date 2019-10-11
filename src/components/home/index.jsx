import React, {Component} from 'react'
import {Row, Col} from 'antd';
import './home.less'
import {SecondaryRoute}  from '../../router/secondary-route'


export default class Index extends Component {
    state = {};

    render() {
        return (
            <div className="home">
                <Row>
                    <Col>
                        <h1>Hello World</h1>
                        <button onClick={() => {
                            const {history} = this.props;
                            history.push({
                                pathname: '/home/personal'
                            })
                        }}>跳转
                        </button>
                    </Col>
                    <Col>
                        <SecondaryRoute/>
                    </Col>
                </Row>
            </div>
        )
    }

}