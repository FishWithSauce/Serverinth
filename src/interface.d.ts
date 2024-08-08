export interface IElectronAPI {
    close: () => Promise<void>,
    minimize: () => Promise<void>,
    maximize: () => Promise<void>,
    resize: () => Promise<void>,
  }
  
  declare global {
    interface Window {
      electronAPI: IElectronAPI
      Image: {
        prototype: HTMLImageElementL;
        new(): HTMLImageElement;
      }
    }
}