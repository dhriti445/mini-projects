import fs from 'fs'
fs.open('file1.txt','r',(err,fd)=>{
    if(err)
        console.log(err);
    else
        console.log('file opened successfully',fd)

    fs.close(fd);
});