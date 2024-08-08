import { Component } from "react";
import "./Nav.css"

class Nav extends Component {
    constructor(props : any) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="nav">
                    <button className="addButton"><span className="material-symbols-outlined" id="addButton-text">add</span></button>
                    <button className="settingsButton"><span className="material-symbols-outlined" id="settingsButton-text">settings</span></button>
                    <button className="homeButton"><span className="material-symbols-outlined" id="homeButton-text">home</span></button>
                    <button className="libraryButton"><span className="material-symbols-outlined" id="libraryButton-text">folder</span></button>
                    <button className="searchButton"><span className="material-symbols-outlined" id="searchButton-text">search</span></button>
                </div>
            </>
        )
    }
}

export default Nav;