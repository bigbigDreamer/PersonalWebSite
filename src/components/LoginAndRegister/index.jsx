import React, {Component} from 'react'
import './index.less'
import {Icon} from 'antd'
import NormalLoginForm from './loginForm'


export default class LoginAndRegister extends Component {
    state = {};

    componentDidMount() {

    }

    render() {
        const {history} = this.props;
        return (
            <div className={'login'}>
                <div className="loginContainer">
                    <div className="top">
                        <Icon type="deployment-unit" style={{fontSize: '68px', color: '#1890ff'}}/>
                        &emsp;&emsp;
                        <span>Personal Website</span>
                    </div>
                    <NormalLoginForm history={history} />
                </div>
            </div>
        )
    }

}
