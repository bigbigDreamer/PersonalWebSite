import React, {Component} from "react"
import {getAllPhoto} from "../../api/photo";
import "./photo.less"

export default class Photo extends Component {

    state = {
        photoList :[]
    };

    componentDidMount() {
        getAllPhoto('photo/getAll')
            .then(data => {
                this.setState({
                    photoList:data.data
                })
            })
    }

    // 点击
    handleClick = (key) => {
        const {history} = this.props;

        history.push({
            pathname:'/home/photo?key='+key
        });
    };

    render() {

        const {photoList} = this.state;
        return (
            // photo 内容展示区域
            <div className={"photo"}>
                {
                    photoList.map(item => {
                        return (
                            // photo内容区域
                            <div className="type" key={item.key} onClick={() => this.handleClick(item.key)}>
                                <div className="container">
                                    <img src={item.cover} alt={item.type}/>
                                </div>
                                <p>
                                    {item.type}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}