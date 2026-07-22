//write a code to create a multiplication table of number using function
// function Table(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

// Table(27);

//addition
// function add(a,b){
//     return a+b;
// }
// //substract
// function sub(a,b){
//     return a-b;
// }
// //multiplication
// function multi(a,b){
//     return a*b;
// }
// //divide
// function div(a,b){
//     return(a/b);
// }

// console.log("addition", add(10,5));
// console.log("sub",sub(10,5));
// console.log("multi",multi(12,2));
// console.log("divide",div(12,6));

//create a code to calculate fibonacie of number

// temp =n2
// n2 = n1+n2
// n1= temp

// iterartion        n1   n2      temp    result       
// 1                  0    1        1           1
// 2                  1     1       1           2
// 3                  1     2       2           3
// 4                 2      3         3          5
// 5                 3     5          5         8
// 6                5       8         8         13
// 7                 8      13        13        21 
// 8                 13      21       21       34
// 9                  21      34      34        55 
// 10                 34      55      55         89


function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a );
        temp = a + b;
        a = b;
        b = temp;
    }
}
fibonacci(10)

// let number = Number(prompt("Enter the number of terms:"));
// fibonacci(number);
//create a function to find factorial of number


// function factorial(number){
//     for(i=1;i<=number;i++){
//         factorialvalue = factorialvalue*i;
//         console.log(i,factorialvalue)
//     }
// }
// let factorialvalue=1;
// factorial(7)