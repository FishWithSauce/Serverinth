import { Component } from "react";
import "./ServerCreator.css"

class ServerCreator extends Component<{toggleCreator : number}> {
    mode : number;
    toggleCreator : number;
    selectColor : string;
    defaultColor : string;
    selected : string[];
    selectedControll : string[];
    vanillaBoxCss : any;
    modBoxCss : any;
    pluginBoxCss : any;
    constructor(props : any) {
        super(props);
        this.mode = 1;
        this.toggleCreator = this.props.toggleCreator;
        this.selectColor = "#1b9943";
        this.defaultColor = "#404258";
        this.selected = ["#1b9943", "#404258", "#404258"]
        this.selectedControll = ["#1b9943", "#404258", "#404258"];

        //CSS types
        this.vanillaBoxCss = {transform: "scale(1)"}
        this.modBoxCss = {transform: "scale(0)"}
        this.pluginBoxCss = {transform: "scale(0)"}
    }

    parseData() : void {}

    removeData() : void {}

    setMode(num : number) : void {
        this.mode = num;
    }

    setOpenBox(vanilla : number, mod : number, plugin : number) {
        this.vanillaBoxCss = {transform: "scale(" + vanilla + ")"};
        this.modBoxCss = {transform: "scale(" + mod + ")"};
        this.pluginBoxCss = {transform: "scale(" + plugin + ")"};
    }

    setButtonColor(custom : boolean, modrinth : boolean, folder : boolean) : void {             //Set button colors in creator header
        if(custom) this.selected[0] = this.selectColor;
        else this.selected[0] = this.defaultColor;

        if(modrinth) this.selected[1] = this.selectColor;
        else this.selected[1] = this.defaultColor;

        if(folder) this.selected[2] = this.selectColor;
        else this.selected[2] = this.defaultColor;

        this.forceUpdate()
    }

    setVersionControll(vanilla : boolean, mod : boolean, plugin : boolean) : void {             //Set the button colors in the version select
        if(vanilla) {
            this.selectedControll[0] = this.selectColor;
            this.setOpenBox(1, 0, 0);
        }
        else this.selectedControll[0] = this.defaultColor;

        if(mod) {
            this.selectedControll[1] = this.selectColor;
            this.setOpenBox(0, 1, 0);
        }
        else this.selectedControll[1] = this.defaultColor;

        if(plugin) {
            this.selectedControll[2] = this.selectColor;
            this.setOpenBox(0, 0, 1);
        }
        else this.selectedControll[2] = this.defaultColor;

        this.forceUpdate();
    }

    render() : JSX.Element {
        
        return(
            <div id="creatorParent" style={{scale: this.toggleCreator}}>
                <div className="blureBackground"></div>
                <div className="serverCreator">
                    <div className="serverCreator-header">
                        <span className="serverCreator-header-title">Create Server</span>
                        <div onClick={() => {this.toggleCreator = 0; this.forceUpdate();}} className="serverCreator-header-close"><span className="material-symbols-outlined" id="closeButton">close</span></div>
                    </div>
                    <div className="serverCreator-import">
                        <div style = {{background: this.selected[0]}} onClick={() => {this.setMode(1); this.setButtonColor(true, false, false);}} className="customButton">
                            <span className="customButton-text">Custom</span>
                        </div>
                        <div style = {{background: this.selected[1]}} onClick={() => {this.setMode(2); this.setButtonColor(false, true, false);}} className="fromModrinthButton">
                            <span className="customButton-text">Modrinth File</span>
                        </div>
                        <div style = {{background: this.selected[2]}} onClick={() => {this.setMode(3); this.setButtonColor(false, false, true);}} className="serverFolderButton">
                            <span className="customButton-text">Server Folder</span>
                        </div>
                    </div>
                    <div className="serverCreator-profile">
                        <div className="serverCreator-profile-image"><span className="material-symbols-outlined" id="imageIcon">image</span></div>
                        <div className="serverCreator-profile-select">
                            <span className="material-symbols-outlined" id="selectIcon">upload</span>
                            <span id="selectIcon-text">Select Icon</span>
                            <input id="serverCreator-profile-select-input" type="file" />
                        </div>
                        <div className="serverCreator-profile-delete"><span className="material-symbols-outlined" id="deleteIcon">delete</span><span id="deleteIcon-text">Delete Icon</span></div>
                    </div>
                    <div className="serverCreator-title">
                        <span className="serverCreator-presentationTitle">Name</span>
                        <input className="serverCreator-title-input" type="text"/>
                    </div>
                    <div className="serverCreator-loader">
                        <span className="serverCreator-presentationTitle">Loader</span>
                        <div style = {{background: this.selectedControll[0]}} onClick={() => {this.setVersionControll(true, false, false)}} className="typeSelecotorButton">
                            <span className="typeSelecotorButton-text">Vanilla</span>
                        </div>
                        <div style = {{background: this.selectedControll[1]}} onClick={() => {this.setVersionControll(false, true, false)}} className="typeSelecotorButton" id="mod">
                            <span className="typeSelecotorButton-text">Mod</span>
                        </div>
                        <div style = {{background: this.selectedControll[2]}} onClick={() => {this.setVersionControll(false, false, true)}} className="typeSelecotorButton" id="plugin">
                            <span className="typeSelecotorButton-text">Plugin</span>
                        </div>
                        <div style = {this.vanillaBoxCss} className="serverCreator-loader-buttonBox" id="vanillaBox">
                            <div className="versionButton"><span className="versionButton-text">Vanilla</span></div>
                        </div>
                        <div style = {this.modBoxCss} className="serverCreator-loader-buttonBox" id="modBox" >
                            <div className="versionButton"><span className="versionButton-text">Forge</span></div>
                            <div className="versionButton"><span className="versionButton-text">NeoForge</span></div>
                            <div className="versionButton"><span className="versionButton-text">Fabric</span></div>
                            <div className="versionButton"><span className="versionButton-text">Quilt</span></div>
                        </div>
                        <div style = {this.pluginBoxCss} className="serverCreator-loader-buttonBox" id="pluginBox">
                            <div className="versionButton"><span className="versionButton-text">Spigot</span></div>
                            <div className="versionButton"><span className="versionButton-text">BungeeCord</span></div>
                            <div className="versionButton"><span className="versionButton-text">Paper</span></div>
                            <div className="versionButton"><span className="versionButton-text">Velocity</span></div>
                        </div>
                    </div>
                    <div className="serverCreator-version">
                        <span className="serverCreator-version-title">Version</span>
                        <select name="versions" className="serverCreator-version-select">
                            <option value="volvo">1.21</option>
                            <option value="saab">1.20.6</option>
                            <option value="opel">1.20.5</option>
                            <option value="opel">1.20.4</option>
                            <option value="opel">1.20.3</option>
                            <option value="opel">1.20.2</option>
                            <option value="opel">1.20.1</option>
                            <option value="opel">1.20</option>
                        </select>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerCreator;