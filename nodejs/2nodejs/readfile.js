const { error } = require('console');
const fs = require('fs');
// const file = __dirname
// console.log("filename", __filename)
// Synchronus
// const data = fs.readFileSync(`file.txt`,`utf-8`);
console.log(data)
//Asynchronus

console.log("Starting")
fs.readFile('file.txt', 'utf-8',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
