import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
import {Provider} from 'react-redux'
import store from './store'
import './mock/loginAndRegister'
import './assets/less/global.less'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

