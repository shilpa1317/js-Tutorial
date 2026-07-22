// let num = Number(prompt("Enter a number"));

// if (num > 0) {
//     console.log("Number is Positive");
// } else if (num < 0) {
//     console.log("Number is Negative");
// } else {
//     console.log("Number is Zero");
// }



//Assignment 1

let num = -5

if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}


//Assignment 2
let i= 1
for (i=1;i<11;i++){
    console.log(`2 * ${i} = ${2 * i}`);

}

//Assignment 4
let i=1
for(i=1;i<21;i++){
   if(i % 2 ==0){
    console.log(i);
   }
}
//Assignment 5

let sum = 0;
let num;

do {
    num = Number(prompt("Enter a number (0 to stop):"));
    sum = sum + num;
} while (num !== 0);

console.log("Sum =", sum);

//assignment 6
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz...");
    } 
    else if (i % 3 == 0) {
        console.log("Fizz...");
    } 
    else if (i % 5 == 0) {
        console.log("Buzz...");
    } 
    else {
        console.log(i);
    }
}
//Assignment 7
let num = Number(prompt("Enter a number"));
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 2) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is not a Prime Number");
}
//Assignment9
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));

if (a >= b && a >= c) {
    console.log(a + " is the largest number");
}
else if (b >= a && b >= c) {
    console.log(b + " is the largest number");
}
else {
    console.log(c + " is the largest number");
}
