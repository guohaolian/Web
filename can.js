const cvs=document.createElement("canvas");
cvs.toBlob((blob)=>{
    const url=URL.createObjectURL(blob);
    resolve({blob,url });
})