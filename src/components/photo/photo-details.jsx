import React,{Component}  from "react"
import "./photo_details.less"
import {getById} from "../../api/photo";

export default class PhotoDetails extends Component{

    state = {
        childrenPhoto:[]
    };

    componentDidMount() {
        const {match} = this.props;
        // location.pathname.slice(location.pathname.indexOf("?")+1,)
        getById('photo/getById',{
            key:match.params.key
        })
            .then(data => {
                this.setState({
                    childrenPhoto:data.data.data
                });
                console.log(data);
            })
    }

    render() {
        const {childrenPhoto} = this.state;
        return (
            <div className="photo_details" >

                    {
                        childrenPhoto.length !== 0?
                        childrenPhoto.map((item,index) => {
                            return (
                                <div className="photoChildren" key={index}>
                                    <img src={item.src} alt={item.name}/>
                                </div>
                            )
                        })
                            :
                            <h1 style={{textAlign:"center"}}>此处没有更多图片！</h1>
                    }

            </div>
        )
    }
}