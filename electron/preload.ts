const { contextBridge, ipcRenderer } = require("electron")

class Exposer {
    expose() : void {
    contextBridge.exposeInMainWorld("electronAPI", {
      close: () => ipcRenderer.send("close"),
      minimize: () => ipcRenderer.send("minimize"),
      maximize: () => ipcRenderer.send("maximize"),
      resize: () => ipcRenderer.send("resize"),
    })
  }
}

const exp = new Exposer();
exp.expose();