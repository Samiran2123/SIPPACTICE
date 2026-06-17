    console.log("Hello Students")
console.log("Morning")
console.log("Afternoon")
console.log("")


setTimeout(()=>{
    console.log("Hello Students")

},3000)

setTimeout(()=>{
    console.log("PAdlo Samiran")
},1000)



let count = 8
let time = setInterval(()=>{
    console.log("Bam fhutne wala hai")
    console.log(count)
    count--
    if(count < 1){
        clearInterval(time)
        setTimeout(()=>{
            console.log("Bam Foot gaya")
        },9000)
    }
},1000)



setTimeout(()=>{
    console.log("Someone : Sage University Kaise collage Hai")
    setTimeout(()=>{
        console.log("Samiran: Kyun jani hai SAGE")
        setTimeout(()=>{
            console.log("Someone :Paise bohot hai")
              setTimeout(()=>{
                console.log("Samiran: Muje dedo ")
              })
        },1000)
    },1000)
},1000)