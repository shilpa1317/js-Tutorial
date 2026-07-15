//Arthmatic operations
let num1=10;
let num2=20;

Addition= num1+num2;
console.log("Addition",Addition);

Sub=num1-num2;
console.log("sub",Sub);

multi=num1*num2;
console.log("multi",multi);

div=num1/num2;
console.log("div",div);

modulus=num1%num2;
console.log("Modulus",modulus);

//comparision operators
let a=10;
let b=20;
console.log("gretaerthan",a>b);
console.log("lessthan",a<b);
console.log("compare dtype and value",a===b);
console.log("not dtype only value",a!==b);


// logical operator
let isAdult = true;
let hasLicense= false;
console.log("And ", isAdult && hasLicense);
console.log("OR",isAdult || hasLicense);
console.log("not",!isAdult);

// demonstrate operator precedense
let result = 10 + 2 * 5 - 8 / 4;
console.log(result);//multi and div then add and sub

//Assignment operator
let x=10;
x+=5;
console.log(x);
x-=3;
console.log(x);
x*=2;
console.log(x);
