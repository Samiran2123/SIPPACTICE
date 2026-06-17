const numbers  = [1 , 2 , 3 ]
const doubled = numbers.map(num =>{
    return (num *2) + 2
})
console.log(doubled)

//Filter

const ages = [ 20, 10, 30,33,18, 22]
const adults = ages.filter(
    age => age >= 18
)
console.log(adults)

//reduce

const nums = [10, 20, 30]
const sum = nums.reduce((acc , current)=>{
return acc + current
}, 0)

console.log(sum)


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

const totalPricce = products.reduce((acc, item)=>{
    return acc + item.price
},0)
console.log(totalPricce)

let arr = [-2, 3, 5, 8 ,-9]
const ans = arr.map(i=>{
    return i + 2
})
console.log(ans)
const pos = ans.filter((num) =>
     num > 0
)
console.log(pos)
const allpos = pos.reduce((acc , nums)=>{
    return acc + nums
},0)
console.log(allpos)

const an = arr.map(i => i +2).filter(i => i>0).reduce((sum,ite,)=> sum +ite)
console.log(an)