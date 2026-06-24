// function greet() {
//     return new Promise((resolve, reject) => {
//         let MO = false
//         if(MO){

//             resolve("Good Morning")
//         }else{
//             reject("Kyun Bolni hai Good Morning")
//         }
//     })
    
// }
// // greet()
// // .then((msg)=>{
// //     console.log(msg)
// // })
// // .catch((ERR)=>{
// //    console.log(ERR)
// // })

// async function pari() {
//     try{

//         const msg = await greet();
//         console.log(msg)
//         console.log("Hello")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// pari()




// function pro(){
//     return new Promise((resolve, reject) => {
//         console.log("Connect ho Raha Hai db se...")
//         console.log("Thoda wait Karo..")
//         setTimeout(()=>{
//             resolve("Connect ho Gaya")
//         },3000)
//     })
// }
// async function con() {
    
// try{
//     const msg = await pro()
//     console.log(msg)
// }
//     catch(err){
//         console.log(err)
//     }
// }
// con()


function uber(Booked){
    return new Promise((resolve, reject) => {
        console.log("Welcome to Uber")
        setTimeout(()=>{
         if(Booked == true ){
            console.log("Ride book Karne k liye Dhanyabaad")
            resolve("Admi")
         }else{
            reject("Book Nahi karna KAya")
        }
        },1000)
    })
}

function uber2(rider){
    return new Promise((resolve, reject) => {
        console.log("Thodi der rukiye Rider assign Ho Raha HAi")
        setTimeout(()=>{
            if(rider == "Admi"){
                resolve(134)
                console.log("Rider Assign Ho Gayi hai")
            }else{
                reject("Rider NAhi mIl Raha HAI")
            }
        },2000)
    })
}

function starTRide(amount){
    return new Promise((resolve, reject)=>{
        console.log("Chalye to Payment kariye Aur chalte hain")
        if(amount == 134){
           resolve("Chao to phir Chalte hain")
        }else{
            reject("Nahi jana Apki Satth")
        }
    })
}

async function name() {
    try{

        const a = await uber(true)
        console.log(a)
        const b = await uber2(a)
        console.log(b)
        const c =await starTRide(b)
    }
    catch(a){
   console.log(a)
    }
}

name()