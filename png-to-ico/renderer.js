const {ipcRenderer} = require("electron")

const btn = document.getElementById("btn")
const input = document.getElementById("formFile")

btn.addEventListener("click",()=>{
  ipcRenderer.send("key:btn-clicked")
})

input.addEventListener("input",()=>{
  console.log(input.files[0])
  console.log(input.files[0].path)
  ipcRenderer.send("key:input-changed",String(input.files[0].path))
})
