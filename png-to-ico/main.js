const {app, BrowserWindow ,ipcMain} = require('electron')
const path = require('path')
const fs = require('fs');
const pngToIco = require('png-to-ico');

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent:true,
    webPreferences: {
      nodeIntegration: true,      
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  var file;
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  ipcMain.on("key:btn-clicked",()=>{
    convert(file)
  })
  ipcMain.on("key:input-changed",(err,data)=>{
    file = data
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

const convert = async function (file) {
  pngToIco(file)
  .then(buf => {
    fs.writeFileSync('app.ico', buf);
  })
  .catch(console.error);
};
