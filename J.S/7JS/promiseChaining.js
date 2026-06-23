// function login(email, password) {
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

// login("samiran@gmail.com","123")
// .then((userData)=>{
//     // console.log(userData.name)
//     return userData;
// })
// .then((data)=>{
// console.log(data.id)
// return data;
// })

// .then((info)=>{
// console.log(info.name)
// })
// .catch((err)=>{
//     console.log(err)
// })


function loginUSer() {
    return new Promise((res, rej) => {
        console.log("Aap login ho rahe hai.");

        setTimeout(() => {
            console.log("Aap login ho chuke hai");
            res();
        }, 1000);
        
    })
}

function getProfile() {
    return new Promise((res, rej) => {
    console.log("Aapki profile fetch ho rahi hai.");
    
    setTimeout(() => {
        console.log("Aapki profile fetch ho chuki hai.");
        res()
    }, 1000);
})                 
    
}

function getOrder(pay) {
    return new Promise((res, rej) => {
    console.log("Aapka order ready ho raha hai.");
    
    setTimeout(() => {
        console.log("Aapka order ready ho chuka hai.");
        res()
    }, 1000);
})
}

function payment() {
    return new Promise((resolve, reject) => {
        console.log("Payment kar dijiye.");
        
        
        setTimeout(() => {
            console.log("Aapka payment ho chuka hai.");
        }, 1000);
    })
}
loginUSer()
.then(getProfile)
.then(getOrder)
.then(payment)
.catch((err)=>{
    console.log("Kuch to gadbad hai daya")
})