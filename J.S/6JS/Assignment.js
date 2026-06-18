const food = new Promise((resolve, reject) => {
    console.log("Food is preapring wait till then !!!")
    let food = true
    setTimeout(() => {
        if (food) {
            resolve("Pizza Delevered")
        }
        else {
            reject("Driver kha gaye Pizza")
        }
    }, 3000)
})
food.then((msg) => {
    console.log(msg)
})
    .catch((err) => {
        console.log(err)
    })



// 2] Create a function processPayment(amount).
// - If amount > 0, payment succeeds.
// - Otherwise, reject the promise.
// Input: 
// processPayment(1000)

// Output
// Payment of ₹1000 successful


function processPayment(AMOUNT) {
    return new Promise((resol, reje) => {
        if (AMOUNT > 0) {
            resol("Payment Suceeds")
        } else {
            reje("You account in minus")
        }
    })
}
processPayment(3000)
.then((rmsg)=>{
  console.log(rmsg)
})
.catch((ermsg)=>{
  console.log(ermsg)
})


// 3] Payment Error Handling with Promises
// Create a function processPayment() that returns a Promise.
// - Resolve with "Payment successful" if the account balance is at least 500.
// - Reject with "Insufficient balance" if the balance is less than 500.
// Input:
// const balance = 100;

// Expected Output:
// Insufficient balance

function processPayment(AMOUNT) {
    return new Promise((resol, reje) => {
        if (AMOUNT >= 500) {
            resol("Payment successful")
        } else {
            reje("Insufficient balance")
        }
    })
}
processPayment(100)
.then((rmsg)=>{
  console.log(rmsg)
})
.catch((ermsg)=>{
  console.log(ermsg)
})

