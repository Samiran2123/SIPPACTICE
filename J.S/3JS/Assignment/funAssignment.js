function greet(name){
    console.log(`Hello ${name} jii`)
}
greet("Samiran")

function totalprice(price,quantiy){
    return price * quantity;
}
console.log(500, 3)

function cart (price, dfee = 40){
 return price + dfee;
}console.log(cart(500))
console.log(cart(500,120))

function voteOr(age){
    if(age>=18){
        console.log("you are elegible for vote")
    }else{
        console.log("Kyun karna apko vote")
    }
}

voteOr(17)

const fe = function(price,discount){
      return (discount/100)*price;
}
console.log(fe(600,800))

const dollers =  (ruppes)=>{
   return ruppes / 94.70
}
console.log(dollers(100))

////STARTING ABJECT ASSIGNMENT GRO HERE
let student ={
    name:"Samiran",
    age:20,
    class:"B.c.a",
    city:"East Medinipur",
}

console.log(student.name)
console.log(student.age)

student.city = "Delhi"
student.age = 20.10

const user = {
    name:"Navi",
    tempToken ="smf03nlfsls"
}

user.phoneNo = 9884050390
delete user.tempToken;


const user2 = {
    name:"Saim",
    tempToken ="smf03nlfsls"
}

function getvalue(obj,key){
 console.log(obj[key])
}
getvalue(user2,"name")

let loopobj = {

}



const accountholder = {
    name = "Samy",
    balance = 5000,

    diposit: function(amount){
    this.balance = this.balance + amount
    },
    withdraw: function(amount){
    this.balance = this.balance - amount
    }
}