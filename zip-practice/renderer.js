const {ipcRenderer} = require("electron")

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
  ipcRenderer.send("key:btn-clicked")
})
