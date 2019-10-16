import React, {Component} from "react"
import {Typography} from "antd"
import "./song.less"
import {getAllSongList} from "../../api/song";
const { Text  } = Typography;
export default class Song extends Component {

    state = {
        songList:[]
    };
    componentDidMount() {
        getAllSongList('song/getAll')
            .then(data => {
                console.log(data);
                this.setState({
                    songList:data.data
                })
            })
    }

    render() {

        const {songList} = this.state;
        return (
            <div className={"song"}>
                {
                    songList.map ((item,index) => {
                        return (
                            <div className="container" key={index}>
                                <div className="left">
                                    <Text strong>{item.parent}({item.children.length})</Text>
                                </div>

                                <div className="right">
                                    {
                                        item.children
                                        &&
                                        item.children.map((item,index) => {
                                            return (
                                                <div className="children" key={index}>
                                                    <a href={item.href} target={"_black"}>{
                                                        item.name
                                                    }</a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}