
let count = 1
const  table = setInterval(()=>{
        const num = 2
        if(count ==11){
            clearInterval(table)
        }else{
            console.log(`${num} X ${count} = ${count*num}`)
            count++
        }
   
},1000)