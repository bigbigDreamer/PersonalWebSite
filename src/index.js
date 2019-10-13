import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
import {Provider} from 'react-redux'
import store from './store'

// 数据Mock区域
import './mock/loginAndRegister'
import './mock/homeMock'

// 全局Css样式
import './assets/less/global.less'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

