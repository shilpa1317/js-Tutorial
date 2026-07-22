// let x= 5;
// let y= "5";
// console.log(x+y);

// let a;
// console.log(typeof a);

// let name ="js";
// let year =2026;
// console.log( name+year);

// console.log(10> 5);
// console.log( 5 == "5");
// console.log(5 ==="5");

// let num =10;
// if(num >5){
//     console.log("Big");
// }else{
//     console.log("Small");
// }


// console.log(typeof "hello");
// console.log( typeof 100);
// console.log( typeof true);
// console.log(typeof undefined);

// let s ="10";
// let g= 2;
// console.log(s * g);

// let value ="20";
// value = Number(value);// Number value used to define datatype as number or called type casting
// console.log(typeof value);

// let age =18;
// // let age = Number(prompt("Enter age ")) html user defined
// if (age<18){
//     console.log(" not Eligible");

// }else{
//     console.log("Eligible");
// } 
// let totalAmount =90
//     if (totalAmount >100){
//     totalAmount =  totalAmount -( totalAmount * 0.1);
//         console.log("Discounted total :",totalAmount);

//     }else{
//         console.log("no discount!!!")
//     }

// control structure


let number = 5;
let factorialValue = 1;

for (let i = 1; i <= number; i++) {
    factorialValue = factorialValue * i;
    console.log(i, factorialValue);
}

console.log("Factorial of", number, "is", factorialValue);
if (factorialValue<10){
    console.log("the factorial is small");
}else if(factorialValue >=10 && factorialValue<=100){
    console.log("the factorial is moderate");

}else{
    console.log("large")
}



