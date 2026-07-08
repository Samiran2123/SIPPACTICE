const { error } = require("console")
const fs = require("fs/promises")



/****************Read file */
const data = fs.readFile('file.txt','utf-8')

.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})


async function fun() {
    try{
        const data = await fs.readFile('file.txt')
        console.log(data)
    }
    catch{
        console.log(error)
    }
}

fun()


let data = [1, 2, 3 ,4]

fs.writeFile('file1.txt', JSON.stringify(data))

.then(()=>{
    console.log("file create ho gaiye");
})

.catch((err)=>{
  console.log(err)
})


async function write() {
    try{

        const write =  await fs.writeFile('file3.txt',JSON.stringify(data))
        console.log("file creattred")
    }
    catch(err){
        console.log(err)
    }
}