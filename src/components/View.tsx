import { Component } from "react";
import "./View.css";
import ServerPreview from "./servers/ServerPreview";
import ServerCreator from "./servers/ServerCreator";

class View extends Component<{mode : number, toggleCreator : number}> {
    previews : any;
    activeCreator : number;
    mode : number;
    constructor(props : any) {
        super(props);
        this.previews = [<ServerPreview name="toll" url="heyho"/>, <ServerPreview name="My server" url="duperImage"/>];
        this.activeCreator = this.props.toggleCreator;
        this.mode = this.props.mode;
    }

    render() : JSX.Element {
        switch(this.mode) {
            case 1: {                   //Server overview mode
                return(
                    <>  
                        <div className="view">
                            <ul className="previewList">{this.previews}</ul>
                            <ServerCreator toggleCreator={this.activeCreator}/>
                        </div>
                    </>
                )
            }
            case 2: {
                return(
                    <>
                        <div className="view">
                            
                        </div>
                    </>
                )
            }
        }

        return(<></>);
    }
}

export default View;