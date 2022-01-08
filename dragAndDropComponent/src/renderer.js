const dropzone = document.getElementById("dropzone");

dropzone.addEventListener("dragover",(e)=>{
    e.stopPropagation();
    e.preventDefault();
});

dropzone.addEventListener("drop",async(e)=>{
    e.stopPropagation();
    e.preventDefault();

    const files = e.dataTransfer.files;

    for (const file of files) {
        const isFile = await window.api.isFile(file.path)
        console.log(file,isFile);
    }
});