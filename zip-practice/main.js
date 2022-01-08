const {app, BrowserWindow ,ipcMain} = require('electron')
const path = require('path')
const JSZip = require('jszip');
const fs = require('fs');

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
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  ipcMain.on("key:btn-clicked",()=>{
    zipAndSave()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

const zipAndSave = async function () {
  var zip = new JSZip();

  var img = zip.folder("icons")
  img.file("imgs.png",fs.readFileSync("imgs.png"),{base64:true})

  const content = await zip.generateAsync({ type: 'nodebuffer' });

  fs.writeFileSync('icon.zip', content);
};
