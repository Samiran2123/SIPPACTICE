//PARAMETER ARGUMENTS
function sunstone(){
    console.log("welcome to reality")
}
sunstone();

function sunstone(course){
    console.log(`welcome to 100% placement ${course}`)
}
sunstone(2027);

function sunstone(batch, course){
    console.log(`Welcome to 100% placed ${course} ${batch} batch`)
}
sunstone(2027, "B.C.A");

//return type function
// function totalStudent(BCA, BTECH,MBA,MCA){
// return BCA+BTECH+MBA+MCA
// }
// console.log(totalStudent(112,267,100,35))

const totalStudent = function(BCA, BTECH,MBA,MCA){
return BCA+BTECH+MBA+MCA
}
console.log(totalStudent(112,267,100,35))

// const add = (a,b)=>{
// return a+b;
// }
const add = (a,b)=> a+b;
console.log(add(1,99))
//default Paramiter
function cart(dfee = 40){
    

}
