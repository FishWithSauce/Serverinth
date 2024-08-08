import { Component } from "react";
import "./ServerPreview.css";

class ServerPreview extends Component<{name : string, url : string}> {
    title : string;
    profileImage : HTMLImageElement = new Image(50, 50);
    imageUrl : string;
    constructor(props : any) {
        super(props);
        this.title = this.props.name;
        this.imageUrl = this.props.url;
    }

    render() {
        return(
            <>
                <div className="serverPreview">
                    <div className="serverPreview-inner"></div>
                    <span className="serverTitle">{this.title}</span>
                </div>
            </>
        );
    }
}

export default ServerPreview;