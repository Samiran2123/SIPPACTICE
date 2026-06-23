function greet() {
    return new Promise((resolve, reject) => {
        let MO = false
        if(MO){

            resolve("Good Morning")
        }else{
            reject("Kyun Bolni hai Good Morning")
        }
    })
    
}
greet()
.then((msg)=>{
    console.log(msg)
})
.catch((ERR)=>{
   console.log(ERR)
})