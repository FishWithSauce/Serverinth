import ServerType from "./serverType";

class ServerCreator {
    type : ServerType;
    title : string;
    profileImg : File;
    constructor(type : ServerType, title : string, profileImg : File) {
        this.type = type;
        this.title = title;
        this.profileImg = profileImg;
    }

    writeSettings() : void {}                   //Write server settings data like max players

    loadSettings() : any[] {return [];}         //Return current server settings data like max players

    setMemory(type : ServerType) : void {}      //Set the server memory based on the server type

}

export default ServerCreator;