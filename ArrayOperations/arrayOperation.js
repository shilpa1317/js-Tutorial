

//write a program to reverse an array manually
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Papaya', 'Kivi', 'Guava'];
let reversefruits = [];

function reversearray(fruits) {
    for (let i = fruits.length - 1; i >= 0; i--) {
        reversefruits.push(fruits[i]);
    }
}

reversearray(fruits);

console.log("fruits:", fruits);
console.log("reverse fruits:", reversefruits);



//write a program to find the second larges number in array(((interviw question)))
let newArr = [84, 4, 8, 21, 41, 34];

function secondLargestNumber(newArr) {
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = newArr[i];
        } else if (newArr[i] > secondLargestNum && newArr[i] < largestNum) {
            secondLargestNum = newArr[i];
        }
    }

    return secondLargestNum;
}

console.log(secondLargestNumber(newArr));

//function method
// function findsecondlargest(array){
//     if(array.length >2){
//         console.log("array should conatin at least two element")
//     }
//     for(n of array){
//         if(n>largest){
//             second=largest
//             largest=n
//         }else if(n!= largest && second){
//             second=n
//         }
//     }console.log(second)
// }


//largest  and smallest

// numArray=[84,4,8,21,41,34];
// let largestNum=0;
// let smallestNum=0;

// let secondLargestNum
// //largest
// for(let i=0;i<numArray.length;i++){
//     if(numArray[i] >largestNum){
//         largestNum= numArray[i]
//     }
// }
// //smallest
// for(let i=0;i<numArray.length;i++){
//     if(numArray[i] <smallestNumNum){
//         smallestNum= numArray[i]
//     }
// }



//create function to merge to array without duplicates
let arr1 = [10, 20, 30, 40];
let arr2 = [30, 40, 50, 60];

function mergeArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}
console.log(mergeArray(arr1, arr2));

//using for of()
let arr1 = [10, 20, 30, 40];
let arr2 = [30, 40, 50, 60];

function mergeArray(arr1, arr2) {
    let result = [];
    for (let num of arr1) {
        result.push(num);
    }
    for (let num of arr2) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(mergeArray(arr1, arr2));




//write a program to find frequncy of each element in array
let arr = [10, 20, 10, 30, 20, 10];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }

    console.log(arr[i] + " = " + count);
}
 //implement a manual version of the include methods
 let arr=[10,20,30,40,50];
 let num=30;
 let  found =false;
 for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        found=true;
    
    }
 }
console.log(found);

//write a program to shift element in an array to left by one position
let arr5 = [10, 20, 30, 5, 60];

let temp = arr5[0];

for (let i = 0; i < arr5.length - 1; i++) {
    arr5[i] = arr5[i + 1];
}

arr5[arr5.length - 1] = temp;

console.log(arr5);

//write a program to shift  element to right in an array to k position
let arr6 = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
    let temp = arr6[arr6.length - 1];

    for (let j = arr6.length - 1; j > 0; j--) {
        arr6[j] = arr6[j - 1];
    }

    arr6[0] = temp;
}

console.log(arr6);

//write a programto remove all duplicate element in an array
let arr1 = [11, 43, 99, 45];
let arr2 = [23, 11, 95, 45];
let duplicate = [];

function duplicateArray(arr1, arr2) {
  

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            duplicate.push(arr2[i]);
        }
    }
    return duplicate;
}
console.log(duplicateArray(arr1, arr2))

//2nd method using new Set()
let arr8=[1,2,3,4,5,6,2,3,4,5]
unique = new Set(arr8);
console.log(unique)("-----------------------------------------------------------");

//create a 2D array representing a multiplication table for number 1 to 10
let table = [];

for (let i = 1; i <= 10; i++) {
    let row = [];

    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }

    table.push(row);
}

console.log(table);
