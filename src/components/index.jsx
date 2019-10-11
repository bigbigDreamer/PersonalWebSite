import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {PrimaryRoute} from '../router/primary-route'


export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*所有组件容器的主入口*/}
                <div style={{height: "100%"}}>
                    <PrimaryRoute/>
                </div>
            </BrowserRouter>
        );
    }
}