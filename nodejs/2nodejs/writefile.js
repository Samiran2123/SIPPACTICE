const { error } = require('console');
const fs = require('fs');

//Synchronus Way
fs.writeFileSync('file.txt','Jishan Dhiyan Delo');

//Asynchronus Way
fs.writeFile('file.txt',"It's you choice",(err)=>{
if(err){
    console.log(err)
    return;
}
console.log("file created")
})

let DATA = {
    batch : 24,
    course : "B.C.A",
    date : Date.now()
}
fs.writeFile('file.txt',JSON.stringify(DATA),(err)=>{
if(err){
    console.log(err)
    return;
}
console.log("file created")
})