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
// greet()
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((ERR)=>{
//    console.log(ERR)
// })

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


//  function login(email, password) {
//     return new Promise((res, rej) => {
//         console.log("Apke credentials verify ho raha hai.. thoda wait kre!!!!")
//         setTimeout(() => {
//             if (email == "samiran@gmail.com" && password == "123") {
//                 res({
//                     id: 1,
//                     name: "Samiran"
//                 })
//             }
//             else {
//                 rej("Invalid Credentials")
//             }
//         },3000)
//     })
// }

// async function name() {
// try{
//     const a = await login ("samiran@",233) 
//     console.log(a)
// }
// catch(msg){
//     console.log(msg)
// }
    
// }

// name()





// function loginUSer() {
//     return new Promise((res, rej) => {
//         console.log("Aap login ho rahe hai.");

//         setTimeout(() => {
//             console.log("Aap login ho chuke hai");
//             res();
//         }, 1000);
        
//     })
// }

// function getProfile() {
//     return new Promise((res, rej) => {
//     console.log("Aapki profile fetch ho rahi hai.");
    
//     setTimeout(() => {
//         console.log("Aapki profile fetch ho chuki hai.");
//         res()
//     }, 1000);
// })                 
    
// }

// function getOrder(pay) {
//     return new Promise((res, rej) => {
//     console.log("Aapka order ready ho raha hai.");
    
//     setTimeout(() => {
//         console.log("Aapka order ready ho chuka hai.");
//         res()
//     }, 1000);
// })
// }

// function payment() {
//     return new Promise((resolve, reject) => {
//         console.log("Payment kar dijiye.");
        
        
//         setTimeout(() => {
//             console.log("Aapka payment ho chuka hai.");
//         }, 1000);
//     })
// }

// async function nam() {
//     try{
//      await loginUSer();
//      await getProfile();
//      await getOrder();
//      await payment();
//     }
//     catch{
//         console.log("Nahi cahlega Kyunki reject kiya hi nahi hao uper ki function main")
//     }
// }





function getNum(num){
    return new Promise((resolve, reject) => {
        console.log("Enter a number")
    setTimeout(()=>{
        if(num == "9883341566"){
            resolve(69059)
        }else{
            reject("Wrong Number")
        }
    },1000)
    })

}

function getOtp(ActualOtp,Userotp){
   
    console.log("Enter the Otp That have been sent to your number")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Userotp === ActualOtp){
                resolve("User Verified")
            }else{
                reject("You Have entered an wrong Otp")
            }
        },2000)
    })
}
async function nam() {
    try{

        const a = await getNum("9883341566")
        console.log(a)
        const b = await getOtp(a,69059)
        console.log(b)
    }
    catch(err){
        console.log(err)
    }
}
nam()

