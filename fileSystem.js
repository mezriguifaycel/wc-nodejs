//core modules
const fs = require('fs');
//console.log(fs);
console.log('before reading file');
/* const readedFile = fs.readFileSync('./text.txt','utf-8')
console.log(readedFile); */
fs.readFile('./text.txt','utf-8',(err,data)=>{
    //console.log(data);
    /* fs.writeFile('./secondFile', data, ()=>{
        console.log('created successfully');
    }) */
    fs.appendFile('./secondFile','partie el zeyda',(err)=>{
        console.log('Updated Sccessfully');
    })
})
console.log('after reading file');
