import React, {Component} from "react"
import {localCache} from '../../localCache'
import {Button, notification} from 'antd';

export default class MiddleJump extends Component {

    componentDidMount() {
        const {history} = this.props;
        if(localCache.get('token') && Date.now() - Number.parseInt(localCache.get('currentStamp'))<=10000) {
            history.push({
                pathname:'/home'
            })
        } else {
            localStorage.clear();
            history.push({
                pathname:'/login'
            })
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}