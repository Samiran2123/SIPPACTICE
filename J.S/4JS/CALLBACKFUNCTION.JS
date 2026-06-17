function greet(){
    console.log("Hello")
}
function call(calllback) {
    calllback()
}

call(greet)


function Printsucces(){
    console.log("Payment Succesful")
}


function PaymentProcessing(massage, amount){
    massage()
    console.log(`${amount} amount deducted from your account`)
}
PaymentProcessing(Printsucces,1222)



const products = [
{
    id : 1,
    name: "headfhone",
    price:6000
},
{
    
    id : 2,
    name: "bottel",
    price:280
},
    {

    id : 3,
    name: "masseger",
    price:1200
},

    
    {

    id : 4,
    name: "cycle",
    price:4000
},
{

    id : 5,
    name: "Bat",
    price:6000
},

{

    id : 6,
    name: "watch",
    price:1550
}



]


products.forEach((i)=>{
    console.log(` id = ${i.id} name = ${i.name} price = ${i.price} `)
})


var sum =0
    products.forEach((i)=>{
        sum += i.price
    })

console.log(sum)

