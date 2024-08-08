import { useState } from 'react';
import "./Header.css"
import logo from "./assets/server_icon.png"

function MaximizeButton() {
    const [state, setState] = useState(true); //maximze?

    return (
        <>
            <button onClick={() => {
                if(state) {
                    setState(false);
                    //console.log("Should resize");
                }
                else {
                    setState(true);
                    //console.log("Should open in full");
                }
                //setState(!state);
                if(state) {
                    window.electronAPI.maximize();
                    console.log("Should resize");
                }
                else {
                    window.electronAPI.resize();
                    console.log("Should open in full");
                }
            }} className="maximizeButton"><span className="material-symbols-outlined" id="maximizeText">open_in_full</span></button>
        </>
    )
}

function Header() {
    return (
        <>
            <div className="header">
                <button onClick={() => {window.electronAPI.close();}} className="closeButton"><span className="material-symbols-outlined" id="closeText">close</span></button>
                <button onClick={() => {window.electronAPI.minimize();}} className="minimizeButton"><span className="material-symbols-outlined" id="minimzeText">minimize</span></button>
                <MaximizeButton/>
                <span className="header-siteTitle">Home</span>
                <div className="header-backButton"><span className="material-symbols-outlined" id="arrowTextBack">arrow_back_ios</span></div>
                <div className="header-forwardButton"><span className="material-symbols-outlined" id="arrowTextForward">arrow_forward_ios</span></div>
                <img src={logo} className="header-logo"/>
            </div>
        </>
    )
}

export default Header;