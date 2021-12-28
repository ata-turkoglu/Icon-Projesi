const { app, BrowserWindow,ipcMain } = require('electron');
const {lstatSync} = require("fs");

let mainWindow;

app.whenReady().then(()=>{
  mainWindow = new BrowserWindow({
    width: 800, height: 600, show: true,
    autoHideMenuBar: true,
    webPreferences : {
      preload: __dirname + "/preload.js"
    }
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(__dirname+"/index.html");
});

ipcMain.handle("is-file",(_,path)=> {
  return lstatSync(path).isFile();
})