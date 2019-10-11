import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox, notification} from 'antd';
import './loginForm.less'
import propTypes from 'prop-types'
import {localCache} from "../../localCache";
import axios from "axios";


class NormalLoginForm extends Component {

    static propTypes = {
        // handleLogin: propTypes.func.isRequired
        history: propTypes.object.isRequired
    };


    handleSubmit = e => {
        // const {history} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // handleLogin(values);
                // console.log('Received values of form: ', values);
                const {history} = this.props;
                // console.log(values,454554);

                // 放置token
                localCache.set('token', true, {
                    isExpired: true
                });


                // 发送模拟请求数据
                axios.get('http://com.cn/customer', {
                    params: values

                })
                    .then(data => {
                        console.log(data);
                        // 路由跳转
                        if (data.data.status === 200) {
                            notification.success({
                                message: '登陆通知',
                                description:
                                    '登陆成功！',
                            });
                            history.push({
                                pathname: '/home'
                            });
                        } else {
                            notification.warning({
                                message: '登陆通知',
                                description:
                                    '用户名或密码错误！',
                            });
                        }
                    })
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        // const {handleLogin} = this.props;
        return (
            <div className="content">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Please input username"
                                size={'large'}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Please input password"
                                size={'large'}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size={'large'}
                        >
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

// 进化高阶组件HOC
const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm