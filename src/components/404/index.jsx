import React,{Component} from "react";
import { Result, Button } from 'antd';

export default class NotFound extends Component{

    // 处理一键返回，回到主页
    handleBackHome = () => {
        const {history} = this.props;
        history.push({
            pathname:'/'
        });
    };
    render() {
        return (
            <div className="notFound">

                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" onClick={() => this.handleBackHome()}>Back Home</Button>}
                />
            </div>
        )
    }
}
