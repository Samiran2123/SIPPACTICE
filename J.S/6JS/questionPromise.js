function login(email, password) {
    return new Promise((res, rej) => {
        console.log("Apke credentials verify ho raha hai.. thoda wait kre!!!!")
        setTimeout(() => {
            if (email == "samiran@gmail.com" && password == "123") {
                res({
                    id: 1,
                    name: "Samiran"
                })
            }
            else {
                rej("Invalid Credentials")
            }
        },3000)
    })
}

login("samiran@gmail.com","123")
.then((userData)=>{
    console.log(userData.name)
})
.catch((err)=>{
    console.log(err)
})