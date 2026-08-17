fruits=['Apple','Banana','Mango','Orange'];
numArray=[3,6,5,2,8,9,7];

const funName=()=>{}//arrowfunction
//callback function
//forEach()
fruits.forEach((fruit,i)=>{
    console.log("i like to eat",fruit)
    console.log(i)
})
//map()   both foreach() and map() are same but now mostly map is used
fruits.map((fruit)=>{
    console.log("i like to eat",fruit)

})

//filter()
const evennum=numArray.filter((num)=>num %2==0)
console.log(evennum)

//find()
const fruitsss=fruits.find((fruit)=> fruit=='Apple');
console.log(fruitsss)

//reduce()
// array.reduce((accumulator, currentValue) => {
//     // logic
//     return accumulator;
// }, initialValue);
const reducenum = numArray.reduce((sum, num) => {
    if (num % 3 === 0) {
        return sum + num;
    }
    return sum;
}, 0);
//some()
const evenN1= numArray.some((num)=> num%2==0)
console.log(evenN1)
//every()
const evenN= numArray.every((num)=> num%2==0)
console.log(evenN)

//sort()
numArray.sort()
console.log(numArray)
//concat
num1=[1,2,3,4]
num2=[2,4,5,7]
 const concat =num1.concat(num2)
 console.log(concat)

 //slice
 const slice=numArray.slice(0,2)
 console.log(slice)
 console.log("-----------------------")
 //splice
 numArray.splice(4)
 console.log(numArray)

 //only splice is method that change original array else all other create new array