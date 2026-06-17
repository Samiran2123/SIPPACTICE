//setInterval(callback, delay)
// setInterval(()=>{
//     console.log("Running")
// },1000)


// let sec  =5
// const timer = setInterval(()=>{
//     console.log(sec)
//     sec--
//     if(sec < 0 ){
//         clearInterval(timer)
//     }
// },100)


const time = setInterval(()=>{
    const time = new Date()
    console.log(time.toLocaleTimeString())
},1000)