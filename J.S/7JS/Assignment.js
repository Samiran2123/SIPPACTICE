// Movie Ticket Booking
// Problem
// Create a promise chain:
// Select Movie
//  ↓
// Select Seats
//  ↓
// Make Payment
//  ↓
// Generate Ticket

// Input
// bookMovie("Avenger", 2)

// Output
// Movie selected
// Seats booked
// Payment successful
// Ticket generated

// {
//   movie: "Avengers",
//   seats: 2,
//   amount: 600
// }

function selectMovie(movien){
return new Promise((resolve, reject) => {
    console.log("select movie")
    setTimeout(()=>{
        console.log("Thanks for selecting the movie")
        resolve({movie : movien})
    })
},1000)
}

function selectSeat(seat){
return new Promise((resolve, reject) => {
    console.log("Select Seat")
    setTimeout(()=>{
        console.log("Thanks for selecting The seat")
        resolve()
    })
},2000)
}

function MakePayment(amount){
    return new Promise((resolve, reject) => {
        console.log("Payment")
        setTimeout(()=>{
            console.log("Thanks for The Payment")
        })
    },3000)
}




