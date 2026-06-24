function getUser() {
    return new Promise((resolve, reject) => {
        console.log("Your information on the way")
        setTimeout(()=>{
            resolve({
                Userid:
            })
        })
    })
}

function getCart() {
    return new Promise((resolve, reject) => {
        console.log("Your cart information on the way")
        setTimeout(()=>{
            
        })
    })
}


function getProducts() {
    return new Promise((resolve, reject) => {
        console.log("Your products information on the way")
        setTimeout(()=>{
            
        })
    })
}

async function name() {
    const [user,cart,products] = await Promise.all([
       getUser(),
       getCart(),
       getProducts()
    ])

}

name()