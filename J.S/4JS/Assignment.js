//MAp Task 1
const price = [1000, 2000, 3000]
const dprice = price.map((i)=> i - (i*(10/100)))
console.log(dprice)
//MAp Task 2
const users = [
 { id: 1, name: "Sameer" },
 { id: 2, name: "Rahul" },
 { id: 3, name: "Amit" }
];
const name1 = users.map((i)=> i.name)
console.log(name1)

//Map Task 3

const products = [
 { name: "Laptop", price: 50000 },
 { name: "Phone", price: 30000 }
];
const str = products.map((i)=> console.log(`${i.id} ${i.name}`))
console.log(str)
// Filter Task 1
//Show products costing more than ₹20,000.
const produc = [
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 },
 { name: "Phone", price: 30000 }
];

const prod = produc.filter((i)=>{
    return i.price > 20000
})
console.log(prod)

// Filter Task 2
// 2: Active Users
// Problem
// Display only active users.
const users1 = [
 { name: "Sameer", active: true },
 { name: "Rahul", active: false },
 { name: "Amit", active: true }
];

const us = users1.filter((i)=> i.active)
console.log(us)


// Filter Task 3
// Search Feature
// Problem
// Find products containing "phone".
// Input:
const produ = [
 "iPhone",
 "Headphone",
 "Laptop",
 "Phone Case"
];

const find = produ.filter((i)=>{
   return i.includes("phone")
})
console.log(find)

// REDUCE()
// 1: Calculate Cart Total
// Problem
// Calculate total amount.

const prices = [1000, 2000, 3000];
const tprice  = prices.reduce((acc , pri)=>{
    return acc + pri
},0)
console.log(tprice)


//Reduce() task 2
// Count Total Quantity
// Problem
// Count items in cart.
// Input:
const cart = [
 { name: "Laptop", quantity: 2 },
 { name: "Mouse", quantity: 3 }
];

const tQantity = cart.reduce((acc, tq)=>{
    return acc + tq.quantity
},0)

console.log(tQantity)

// Reduce Task 3
// Problem: Cart Checkout
// Find:
// Only available products
// Calculate discounted price
// Find total quantity
// Find the total amount
// Increase the quantity of Laptop and calculate price
// Make the phone available and find the total price 
const prouducts = [
 {
   name: "Laptop",
   price: 50000,
   available: true,
   quantity: 2
 },
 {
   name: "Phone",
   price: 30000,
   available: false,
   quantity: 7
 },
 {
   name: "Mouse",
   price: 1000,
   available: true,
   quantity: 12
 }
];

//Only available products
const AvailProd = prouducts.filter((i)=>
    i.available == true
)

console.log(AvailProd)



